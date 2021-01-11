var express = require('express'); 
var router = express.Router();   

 router.get('/ab*cd',function(req,res,next) { 
      res.send('respond for ab*cd'); 
 });   
 router.get('/jade/:file',function(req,res,next){
      res.render(req.params.file)
 });      
   
 module.exports = router;
