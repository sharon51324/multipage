var wxpress = require('express') 
var multer = require('multer') 
var upload = multer({dest:'./tmp/'}) 
var app = express( )
  
app.use(express.static('publuc')); 
app.post(express.static('public')); 
app.post('/file_upload',upload.single('file')),function(res,res,next){ 
    
}