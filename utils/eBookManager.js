const fs = require('fs');
const moment = require('moment');
const assert = require("assert");
const base64url = require('base64url');
const glob = require("glob");
const async = require("async");
const path = require("path");

const {mongodbUrl} = require("../conf");
const {getJwtClient, getTokens, allFilesList} = require("./customGdriveApi");
const MongoClient = require('mongodb').MongoClient;

async function updateEBookDB(selector, needReset=true, dbName='mydb', collName='booksdb-gdrive'){
	if(selector && selector.length <= 0){
		return 0;
	}	
	const conn = await MongoClient.connect(mongodbUrl,  { 
		useNewUrlParser: true, useUnifiedTopology:true 
	});
	let db = conn.db(dbName);
	try{
		let clt = db.collection(collName);

		if( needReset && (await clt.countDocuments())>0 ) await clt.drop();

		let r = await clt.insertMany(selector);
		assert.equal(r.result.ok,1);

		return r.result.ok;
	}catch(e){
		console.log("Inserting get some errors.");
		return -1;
	}finally{
		conn.close();
	}
}


async function getBookList(selector={}, dbName='mydb', collName='booksdb-gdrive'){
	const conn = await MongoClient.connect(mongodbUrl,  { 
		useNewUrlParser: true, useUnifiedTopology:true 
	});
	let db = conn.db(dbName);
	try{
		let clt = db.collection(collName);
		return await clt.find(selector)
				.project({kind:0, mimeType:0, createdTime:0, size:0, gid:0, oid:0})
				.skip(0)
				.limit(0)
				.sort({_id:1})
				.toArray();
	}catch(e){
		console.log("GetBookList got some errors.");
		return 0;
	}finally{
		conn.close();
	}
}


function filterAllFiles(allFiles){
	return allFiles.map((v,ix)=>{
		v = {
			...v,
			title: v.name, 
			gid: v.id, 
			oid: ix+1, 
			size: parseInt(v.size)
		};
		delete v.id;
		delete v.name;
		return v;
	});
}

function createBookData(){
	const jwtClient = getJwtClient();

	return getTokens(jwtClient).then((token, tokens)=>{
		return allFilesList(token, {
		  q: `(mimeType contains 'pdf' or 
			  mimeType contains 'chm' or 
			  mimeType contains 'rar' or 
			  mimeType contains 'zip' or 
			  mimeType contains 'mobi' or 
			  mimeType contains 'epub')`,
		  fields: "nextPageToken, files(id, name, size, kind, mimeType, createdTime, modifiedTime)"
		}).then((allFiles)=>{
			console.log(allFiles.length);
		
			allFiles = filterAllFiles(allFiles);
			return updateEBookDB(allFiles).then((ok)=>{
				if(ok===1){
					console.log("The update-all is successfully.");
				}else{
					console.log("The update-all is not update any data.");
				}
				return ok;
			})
		});
	});
}

function updateBookData(msTimeAgo=1000*60*60){
	//warning: The number of books per update must be less than 100
	const jwtClient = getJwtClient();

	return getTokens(jwtClient).then((token, tokens)=>{
		return allFilesList(token, {
		  q: `(mimeType contains 'pdf' or 
			  mimeType contains 'chm' or 
			  mimeType contains 'rar' or 
			  mimeType contains 'zip' or 
			  mimeType contains 'mobi' or 
			  mimeType contains 'epub') and 
			  (modifiedTime > '${moment(Date.now()-msTimeAgo).format()}')`,
		  fields: "nextPageToken, files(id, name, size, kind, mimeType, createdTime, modifiedTime)"
		}).then((allFiles)=>{
			allFiles = filterAllFiles(allFiles);
			return updateEBookDB(allFiles, false).then((ok)=>{
				if(ok===1){
					console.log("The partial-update is successfully.");
				}else{
					console.log("The partial-update is not update any data.");
				}
				return ok;
			});
		});
	  })
}


function generateSitemap(exportPath='sitemap.xml', siteBaseAddr='https://your-ebook.xyz', maxIndex=50000){
	let $xml$urlset = (x)=>`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${x}\n</urlset>`;
	let $url = (loc,lastmod,changefreq,priority)=>`\n\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n\t\t<changefreq>${changefreq}</changefreq>\n\t\t<priority>${priority}</priority>\n\t</url>`

	return getBookList().then((data)=>{
		let j = data;
		let filesLen = Math.ceil(data.length / maxIndex);

		let removeSitemaps = (expPath)=>{
			return new Promise((resolve)=>{
				glob(expPath.replace(".xml", "*.xml"), (er, files)=>{
					if(er) throw er;
					async.each(files, (file,callback)=>{
						fs.unlink(file,(err)=>{
							if (err) throw err;
							callback();
						})
					}, (err)=>{
						if( err===null ) {
							resolve(true);
						} else {
							console.error("Clearing-sitemaps gets some errors.");
							resolve(false);
						}
					});
				})
			});
		}

		return removeSitemaps(exportPath).then((resx)=>{
			if(resx===true){
				for(let f=0; f<filesLen; f++){
					let urls = '';
					for(let i = f * maxIndex; i < (f+1 < filesLen ? (f+1)*maxIndex : j.length); i++){
						urls += $url(siteBaseAddr + '/share?ebn=' + base64url.encode(j[i].title), moment(j[i].modifiedTime).format(), "weekly", "0.8");
					}
					
					const absExportPath = path.resolve(__dirname,exportPath.replace(".xml",(f+1)+".xml"));
					const file = fs.createWriteStream(absExportPath);
					file.write($xml$urlset(urls));
					file.end();
				}
				return {state: true, length: filesLen};
			}else{
				return false;
			}
		});
	});
}

function updateRobotsTxt(sitemapCount=1, exportPath="../public/Robots.txt",siteBaseAddr='https://your-ebook.xyz'){
	let absPath = path.resolve(__dirname,exportPath);
	return new Promise((resolve)=>{
		fs.readFile(absPath,{encoding:'utf8'}, (err,data)=>{
			let content = data;
			let robotsHead = content.replace(/\n?Sitemap\:.*/gi,'').trim() + '\n\n';
	
			let robotsBody = (sitemapNum)=>{
				let sitemap = (n)=>`Sitemap: ${siteBaseAddr}/sitemap${n}.xml\n`;
	
				let sitemaps = ''
				for(let i=0; i<sitemapNum; i++){
					sitemaps += sitemap(i+1);
				}
				return sitemaps;
			}
	
			let robotEntity = robotsHead + robotsBody(sitemapCount);
	
			const file = fs.createWriteStream(absPath);
				  file.write(robotEntity);
				  file.end();
			resolve(true);
		});
	});
}

function updateRobotsText(path='../public/sitemap.xml', basePath='https://your-ebook.xyz', indexMax=50000){
	return generateSitemap(path,basePath,indexMax).then((res)=>{
		if(res.state===true){
			return updateRobotsTxt(res.length, "../public/Robots.txt").then((res)=>{
				return 1;
			})
		}else{
			return 0;
		}
	});
}


function autoUpdateBookData($am=1, $intervalHours=24){
		let stid,siid;
		let delayIntervalExec = (delay=1000, interval=3000, callback=()=>{})=>{
			stid = setTimeout(()=>{
				callback();
				siid = setInterval(callback, interval);
			}, delay);
		}

		let zeroDiff = (hourNo=1)=>{
			//hourNo=1 means next 01:00's utc-timestamp
			const ymd = 'YYYY-MM-DD';
			const ymdhms = 'YYYY-MM-DD HH:mm:ss';
			
			let tomorrowString = moment(moment().add(1,'days').format(ymd)).format(ymdhms);
				tomorrowString = moment(tomorrowString).add(hourNo,'hours').format(ymdhms);

			let tomorrowTT = moment(tomorrowString).toDate().getTime();
			let nowTT = moment().toDate().getTime();

			let diff = tomorrowTT - nowTT;
			return diff;
		}

		const $1day = 1000 * 60**2 * $intervalHours;
		const theDelay = zeroDiff($am);

		console.log("> Auto-UpdateBookData-Mode Enabled!")
		delayIntervalExec(theDelay, $1day, ()=>{
			updateBookData($1day).then((res)=>{
				if(res===1){
					updateRobotsText()
				}
			})
		});
}



module.exports = {
	createBookData: createBookData,
	updateBookData: updateBookData,
	updateRobotsText: updateRobotsText,
	autoUpdateBookData: autoUpdateBookData
}

