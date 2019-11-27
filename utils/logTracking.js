let assert = require("assert");

async function logWhoDownloadedBook(req,coll='whoDownloadedBook'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { bookname, bookid } = req.body;
    let { booksize } = req;
    
    let finddata = { ip: ip };
    let updatedata = {
            $addToSet:{
                fingerprint: fingerprint,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
            },
            $push:{
                bookid: bookid,
                bookname: bookname,
                booksize: booksize,
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

async function logWhoseFingerDownloadedBook(req,coll='whoseFingerDownloadedBook'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { bookname, bookid } = req.body;
    let { booksize } = req;
    
    let finddata = { fingerprint: fingerprint };
    let updatedata = {
            $addToSet:{
                ip: ip,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
            },
            $push:{
                bookid: bookid,
                bookname: bookname,
                booksize: booksize,
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

async function logWhichBookDownloaded(req,coll='whichBookDownloaded'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { bookname, bookid } = req.body;
    let { booksize } = req;
    
    let finddata = { bookname: bookname };
    let updatedata = {
            $addToSet:{
                ip: ip,
                fingerprint: fingerprint,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
                bookid: bookid,
                booksize: booksize,
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

//===============================================================

async function logWhichWordSearched(req,coll='whichWordSearched'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { keyword } = req.body;
    
    let finddata = { keyword: keyword };
    let updatedata = {
            $addToSet:{
                ip: ip,
                fingerprint: fingerprint,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

async function logWhoSearchedWord(req,coll='whoSearchedWord'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { keyword } = req.body;
    
    let finddata = { ip: ip};
    let updatedata = {
            $addToSet:{
                fingerprint: fingerprint,
                keyword: keyword,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

async function logWhoseFingerSearchedWord(req,coll='whoseFingerSearchedWord'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let { keyword } = req.body;
    
    let finddata = { fingerprint: fingerprint};
    let updatedata = {
            $addToSet:{
                ip: ip,
                keyword: keyword,
                agent: req.headers['user-agent'],
                language: req.headers['accept-language'],
                timestamp: new Date()
            },
            $inc:{ count:1 }
    }
    let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
        assert.equal(ru.result.ok,1,"update error at loginFailed/mydb.");
}

//========================================================
//db.whoseFingerDownloadedBook.findOne({fingerprint:"NjzC+WHFjkWkMrnCQiIJg709fLkB7Q17qFhMSWMd0H4="})

async function detectRecentBehaviorLegality(req, recentUsagelimit={recent:1000*60**2, usableSize:1024**3}, coll='whoseFingerDownloadedBook'){
    let cc = req.db.collection(coll);
    let ip = req.ip;
    let fingerprint = req.headers.authorization.slice(7);
    let {recent, usableSize} = recentUsagelimit;

    let result = await cc.findOne({fingerprint: fingerprint});
    let getTime = (x) => x ? new Date(x).getTime() : Date.now();

    let timestamps = result ? result.timestamp : [];
    let booksizes = result ? result.booksize : [];

    let recentUsedSize = 0;
    for(let i=timestamps.length-1; i >= 0 ; i--){
        if(getTime(timestamps[i]) >= (Date.now() - recent)){
            recentUsedSize += booksizes[i];
        }else{
            break;
        }
    }

    let RemainingRatio = (usableSize - recentUsedSize) / usableSize;
    return RemainingRatio<0 ? 0 : Math.round(RemainingRatio*100)/100; // 0 ~ 1
}

module.exports = {
    logWhichBookDownloaded,
    logWhoDownloadedBook, 
    logWhoseFingerDownloadedBook,
    
    logWhichWordSearched,
    logWhoSearchedWord,
    logWhoseFingerSearchedWord,

    detectRecentBehaviorLegality
};