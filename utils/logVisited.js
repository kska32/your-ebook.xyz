const mongodb = require("mongodb");
let {submitReplyInterval} = require("../conf");
module.exports = {logSubmit, logRequest, getLTSby, isIntervalIllegal};

async function logRequest(req,coll='logRequest'){
      let cc = req.db.collection(coll);
      let finddata = { ip: req.ip };
      let updatedata = {
            $set:{ ip:req.ip },
            $addToSet:{
              agent: req.headers['user-agent'],
              language: req.headers['accept-language'],
              url: req.url
            },
            $push:{
              timestamp: {
                $each: [new Date()],
                $slice: -100
              }
            },
            $inc:{ count:1 }
      }
      let ru = await cc.updateOne(finddata,updatedata,{upsert:true});
}

// 检测最后提交评论或回复的时间戳。并返回合法性。
async function logSubmit(req,newsid,coll='logSubmit'){
      let cc = req.db.collection(coll);
      let findobj = { ip:req.ip };
      let updateobj = {
        $set:{ ip:req.ip },
        $addToSet:{
            agent: req.headers['user-agent'],
            language: req.headers['accept-language']
        },
        $push:{
            footprint: {$each: [{newsid:mongodb.ObjectId(newsid),timestamp:new Date()}], $slice: -200 }
        },
        $inc:{ count:+1 }
      }

      let r = await cc.updateOne(findobj,updateobj,{upsert:true});
      return r.result;
}


async function getLTSby(req,coll='logSubmit'){//LTS=> Latest TimeStamp
      let cc = req.db.collection(coll);
      let r = await cc.find({ip:req.ip})
              .project({
                  footprint:{$slice:-1}, 
                  ip:0, 
                  agent:0, 
                  count:0, 
                  language:0
              })
              .toArray();
      return r.length>0 ? r[0].footprint[0].timestamp : 0;
}


async function isIntervalIllegal( req, interval = submitReplyInterval*1000 ){
      let thatTime = (new Date(await getLTSby(req))).getTime();
      let curTime = (new Date()).getTime();
      let diffTime = (new Date(curTime-thatTime)).getTime();//ms
      return diffTime<interval;
}


