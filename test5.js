var fs =  require('fs') 
var data ="this is a another test"
data += ",測試"
fs.rename('retest.txt' ,'package\\reeetest.txt',function(err){   //rename('原名' ,新,function(err)
     if(err)console.log(err) 
     else console.log("write success!") 
})