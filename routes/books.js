const express = require('express');
const books = express.Router();
const {Throttle} = require('stream-throttle');

const {createCaptchaToken,verifyCaptchaToken} = require("../utils/myCrypto");

const {searchbooks, getbookInfo} = require('../utils/searchbooks');

const {
    logWhichBookDownloaded,   
    logWhoDownloadedBook,  
    logWhoseFingerDownloadedBook,

    logWhichWordSearched,
    logWhoSearchedWord,
    logWhoseFingerSearchedWord,

    detectRecentBehaviorLegality
} = require("../utils/logTracking.js");

const { getbookFromGdrive } = require("../utils/getbookFromGdrive");

const {createBookData,updateBookData,updateRobotsText} = require("../utils/eBookManager");

books.post('/search', async function(req, res, next){
        let {keyword,skipNum,limitNum} = req.body;

        if(keyword === undefined){
            return res.send('Not Found');
        }

        keyword = keyword.trim();

        if(keyword === '<<___last_updated___>>'){
            await logWhoseFingerSearchedWord(req);
        }else{
            await logWhichWordSearched(req);
            await logWhoSearchedWord(req);
            await logWhoseFingerSearchedWord(req);
        }

        if( keyword.length<1 || (keyword.length===1 && /^[.,%!&@~']{1}/gi.test(keyword)) ){
            return res.send('Not Found');
        }

        try{
            let result = await searchbooks(keyword, req.db, skipNum, limitNum);
            if( result.length === 0 ){
                return res.send('Not Found');
            }else{
                return res.send( result );
            }
        }catch(err){
            return next(err);
        }
});

books.post('/getbook', async function(req,res,next){
        let {bookid, token} = req.body;

        if(token === undefined){
            token = createCaptchaToken(bookid);
            res.send(token);
        } else if (token.result === '111'){
            let FinalVCToken = verifyCaptchaToken(token);
            let FinalResult = FinalVCToken.result;

            switch(FinalResult){
                case '111':
                        let RemainingRatio = await detectRecentBehaviorLegality(req,{recent:1000*60**2*12, usableSize:1024**2*512});
                        let bookInfo = await getbookInfo(bookid, req.db, { 'title':1, 'gid':1, 'size':1 });
                        req.booksize = bookInfo.size;
                
                        await logWhichBookDownloaded(req);
                        await logWhoDownloadedBook(req);
                        await logWhoseFingerDownloadedBook(req);
                
                        try{
                            res.writeHead( 200, {'Content-Length' : bookInfo.size} );
                            let bookContent = await getbookFromGdrive(bookInfo);
                            bookContent.data.pipe(new Throttle({rate: 1024*(768*RemainingRatio+256)})).pipe(res); //256KB ~ 1024KB(1MB)
                        }catch(err){
                            return next(err);
                        } 
                        break;
                default:
                        token.result = FinalResult;
                        res.send(token);
                        break;
            } 
        } else {
            let {result} = verifyCaptchaToken(token);
            token.result = result;
            res.send(token);
        }
});

books.post('/getallbooktitle', async function(req,res,next){
    let clt = req.db.collection("booksdb");
    var query = {};
    var project = {'title':1};//'path':1, 'points':1
    try{
        let result = await clt.find(query)
                            .project(project)
                            //.skip(0)
                            //.limit(100)
                            .toArray();
        return res.end(JSON.stringify(result));
    }catch(err){
        res.sendStatus(500);
    }
});

books.post('/getDataForAdmin', async function(req,res,next){
    let {collName,skipNum,limitNum,sortType,key,query,project} = req.body;
    let clt = req.db.collection(collName||'');

    try{
        if(key === '1900329'){
            let result = await clt.find(query||{})
                .project(project||{})
                .skip(skipNum||0)
                .limit(limitNum||0)
                .sort(sortType||{_id: -1})
                .toArray();
            res.send(result);
        }else{
            res.status(404).send();
        }
    }catch(err){
        //console.error(`\n${new Date}\n`,err);
        res.sendStatus(500);
    }
});


books.post('/eBookManager', async function(req,res,next){
    const {query, key} = req.body;
    let r = null;
    
    try{
        if(key === '1900329'){
            req.setTimeout(0);
            switch(query.type){
                case 'CREATE_BOOK_LIST':
                    r = await createBookData();
                    res.sendStatus(r===1 ? 200 : 500);
                    break;
                case 'UPDATE_BOOK_LIST':
                    r = await updateBookData(1000*60*60);
                    res.sendStatus(r===1 ? 200 : (r===0 ? 204 : 500));
                    break;
                case 'UPDATE_ROBOTS_TXT':
                    r = await updateRobotsText();
                    res.sendStatus(r===1 ? 200 : 500);
                    break;
            }
        }
    }catch(err){
        res.sendStatus(500);
    }
})

module.exports = books;

