var express = require('express');
var router = express.Router(); 
var fs = require('fs')  
var multer = require('multer') 
var upload = multer({dest:'./tmp/'})  

/* GET users listing. */ 

router.get('/', function(req, res, next) {
 res.render('index',{title:'my 123Express'});
});
  

  
router.post('/file_upload',upload.single('file'),function(req,res,next){   
 //console.loge("file name:"+req.file.fieldname);   
 console.loge("file name:"+req.file.fieldname); 
 console.loge("file name:"+req.file.filename);  
 console.loge("file path:"+req.files.path); 
 console.loge("file type:"+reqfiles.mimetype);  


fs.readFile(req.file.path,function(err,data){    
   if(err) {
       console.log(err)  
       res.send("read failed"); 
   } 
   else{ 
       res.set('Content-Type',req.file.mimetype);
       res.send(data)
   }   
 }) 
})
module.exports = router;
