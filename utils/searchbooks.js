const assert = require("assert");
const collName = "booksdb-gdrive";

function filterSpecialChar(str){
	return str.replace(/[\^\$\(\)\*\+\-\\\.\[\]\{\}\|\?]/gi,(x)=>{
		return '\\'+x;
	});
}

let searchbooks = async function(keyword, db, skipNum=0, limitNum=0){
		let clt = db.collection(collName);
		var fsl = filterSpecialChar;
		keyword = fsl(keyword);

		var query = {'title':{'$regex':'.*'+ keyword +'.*','$options':"gi"}};
		var project = {'title':1, 'size':1};//'path':1, 'points':1
		let result = await clt.find(query)
							.project(project)
							.skip(skipNum)
							.limit(limitNum)
							.toArray();
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
		fsl: filterSpecialChar
};