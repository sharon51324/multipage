
var express = require('express');
var app = express();
 
app.use(express.static('public'));

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