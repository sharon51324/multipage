
var express = require('express');
var app = express();  

var bodyParser = require('body-parser'); 
var urlencodeParser = bodyParser.urlencoded({ extended:false});
 
app.use(express.static('public'));/*-設定完靜態路徑後　網址後加我們設定的　ｈｔｍｌ明子就好了（ｔｅｓｔ．ｈｔｍｌ）-*/ 
 
app.post('/process_post',urlencodeParser, function (req,res){ 
    response = {
         first_mame:req.body.first_name, 
         last_name:req.body.last_name
    }; 
    console.log(response); 
    
    res.send("full Name:" + req.body.first_name + " "+req.body.last_name);
});

app.get('/',function(req,res){
     res.send('hello GET');
});

app.post('/', function(req,res){
    res.send('hello post');
});　 
 
app.get('/list_user', function(req,res){
     res.send('GET list_user');
});

app.get('/ab*cd', function(req,res){
    res.send('GET ab*cd request');
});
　
var server =app.listen(8081, function(){
     var host = server.address().address; 
     var port = server.address().port;
     console.log("Example app listening at http://%s:%s",host,port); 

     
});