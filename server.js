var express = require('express');
var morgan =  require('morgan');
var path =    require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/article-one', function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-one.html'));
});

app.get('/article-two', function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three', function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});



   
