const express = require('express');
const index = express.Router();
const path = require("path");

index.get(["/share","/search","/latest","/ebooks"],(req,res,next)=>{
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

index.get("/robots.txt",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname, '../public/Robots.txt'));
});

module.exports = index;