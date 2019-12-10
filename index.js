const http = require("http");

const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const mongodb = require("mongodb");

const app = express();
const books = require("./routes/books");
const index = require("./routes/index")

const {mongodbUrl,svrIp,svrPort} = require("./conf");
const MongoClient = mongodb.MongoClient;

const {logRequest} = require("./utils/logVisited");

const {autoUpdateBookData} = require("./utils/eBookManager");

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

app.use("/", index);
app.use("/books", books);

app.use((req, res, next)=>{//..if Cannot GET return 404error.
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.status(err.status||500)
        .sendFile(path.resolve(__dirname,'./public/index.html'));
});

MongoClient.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology:true })
.then((r)=>{
        console.log("> Mongodb is ok.");

        app.set('db', r.db("mydb"));
        app.set("x-powered-by",false);

        let httpServer = http.createServer(app);
        httpServer.listen(svrPort, svrIp, ()=>{
            autoUpdateBookData(-7, 24);//1am, 24hours
            console.log(`> Your-ebook.xyz is ok. at the ${svrIp}:${svrPort}`);
        });
}).catch((err)=>{
        console.error(err);
});
