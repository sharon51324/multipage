var fs =  require('fs') 
var data ="this is a another test"
data += ",測試"
fs.writeFile('test3.txt' ,data,function(err){   //writeFile破壞性結構  每次都會覆寫舊的
     if(err)console.log(err) 
     else console.log("write success!") 
})