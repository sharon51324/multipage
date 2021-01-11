var fs =  require('fs') 
var data = fs.readFilSync("test.txt",utf8 );   //Sync=告訴瀏覽器此為非同步
console.log(data);