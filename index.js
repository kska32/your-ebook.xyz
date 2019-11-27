const http = require("http");
const fs = require("fs");

const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const mongodb = require("mongodb");

const app = express();
const books = require("./routes/books");

const {mongodbUrl,svrIp,svrPort} = require("./conf");
const MongoClient = mongodb.MongoClient;

const {logRequest} = require("./utils/logVisited");

if(process.env.NODE_ENV==='production'){
    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:"100mb"}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{ 
    req.db = app.get('db');
    next(); 
});

app.use((req,res,next)=>{
    logRequest(req,'visitedYourEbook');
    next();
});

app.use("/books", books);

MongoClient.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology:true })
.then((r)=>{
        console.log("> Mongodb is ok.");
        console.log(process.env.NODE_ENV);

        app.set('db', r.db("mydb"));
        app.set("x-powered-by",false);

        app.get("/share",(req,res,next)=>{
            res.sendFile(path.resolve(__dirname, './public/index.html'));
        });

        let httpServer = http.createServer(app);
        httpServer.listen(svrPort,svrIp, ()=>{
            console.log(`> Web Server is ok. at the ${svrIp}:${svrPort}`);
        });

}).catch((err)=>{
        console.error(err);
});
