var fs =  require('fs') 
var data ="this is a another test"
data += ",測試"
fs.appendFile('teat2.txt' ,data,function(err){   //append家在檔案後面  不會覆寫舊的
     if(err)console.log(err) 
     else console.log("write success!") 
})