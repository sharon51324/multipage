var express = require('express') 
var multer = require('multer') 
var upload = multer({dest:'./tmp/'}) 
var app = express( ) 
var fs = require('fs')  

app.use(express.static('public'));  

var cpUpload = upload.fields([{name:'main',maxCount:1},
     {name:'sub',maxCoute:8}]);
app.post('/file_upload',cpUpload,function(req,res,next){   //直接讓雲版的array turn pload
     //console.loge("file name:"+req.file.fieldname);  
     console.loge("file length:"+req.files.length);  
     console.loge("file name:"+req.files[main][0].Originalname); 
     console.loge("file name:"+req.files[sub].filename); 
     for(i=0;i<req.files[sub].length;i++) { 
          conaole.log("sub"+i+":"); 
          console.loge("Original file :"+req.files[main][i].Originalname); 
          console.loge("file path:"+req.files[i].path); 
          console.loge("file type:"+reqfiles[i].mimetype);  
     }
        
     res.end("upload Completely" ); 

          //res.end("upload:"+req.file.filename); 
         /*- fs.readFile(req.file.path.function(err,data){    
               if(err) {
                    console.log(err)  
                    res.send("read failed"); 
               } 
               else{ 
                    res.set('Content-Type',req.file.mimetype);
                    res.send(data)
               }   }); -*/
})
  
var server = app.listen(8081,function(){
     var host =server.address().adddress
     var port =server.address().port 
     console.log("Ëxample app listening at http://%s:%s",host,port)
});