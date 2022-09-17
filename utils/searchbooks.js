const assert = require("assert");
const opencc = require('node-opencc');
const collName = "booksdb-gdrive";

function filterSpecialChar(str){
	///[\^\$\(\)\*\+\-\\\.\[\]\{\}\|\?]/gi
	return str.replace(/[\^\$\(\)\*\+\-\\\.\[\]\{\}\?]/gi,(x)=>{
		return '\\'+x;
	});
}

function filterMultipleEmptyChars(str){
	return str.replace(/[\s]{2,}/gi,' ');
}

function filterOrOperator(str){
	String.prototype.xtrim = function(sym){
		return this.replace(new RegExp(`^\\${sym}+|\\${sym}+$`,'gi') ,'');
	}
	let rs = str.replace(/[\s]*[\|]+[\s]*/gi, '|').replace(/[\|]{2,}/gi,'|').xtrim('|');
	return rs.length === 1 && rs === '|' ? '' : rs;
}

function TSST(keyword){
	//Traditional <--> Simplified Chinese
	let TS = opencc.traditionalToSimplified(keyword);
	let ST = opencc.simplifiedToTraditional(keyword);
	return `${ TS }|${ ST }`;
}

let searchbooks = async function(keyword, db, skipNum=0, limitNum=0){
		let clt = db.collection(collName);
		let fsl = filterSpecialChar;
		let fme = filterMultipleEmptyChars;
		let foo = filterOrOperator;

		keyword = fsl(keyword);
		keyword = fme(keyword);
		keyword = foo(keyword);

		let query,project,result;

		if(keyword==='<<___last_updated___>>'){
			project = { 'title':1, 'size':1 };
			result = await clt.find()
					.project(project)
					.sort({_id: -1})
					.skip(skipNum)
					.limit(limitNum)
					.toArray();
		}else{
			if(keyword==='') return '';

			query = {
				'title':{
					'$regex':`.*(${TSST(keyword)}).*`, 
					'$options': 'i'
				}
			};
			project = {'title':1, 'size':1};//'path':1, 'points':1
			result = await clt.find(query)
					.project(project)
					.skip(skipNum)
					.limit(limitNum)
					.toArray();
		}
		return result;
}

let getbookInfo = async (bookid, db, fields={}, skipNum=0, limitNum=0)=>{
	let clt = db.collection(collName);
	let query = { '_id': require("mongodb").ObjectId(bookid) };
	let project = fields;
	let r = await clt.find(query)
					.project(project)
					.skip(skipNum)
					.limit(limitNum)
					.toArray();
	//assert.equal(r.result.ok, 1);
	return r[0];
}

module.exports = {
		searchbooks, 
		getbookInfo, 
		fsl: filterSpecialChar,
		fme: filterMultipleEmptyChars,
		foo: filterOrOperator
};