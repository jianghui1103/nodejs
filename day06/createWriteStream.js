const fs = require('fs');
var data = '我是数据库中获取的数据';
var str = ''

for(var i=0;i<500;i++) {
    str+= '我是数据库';
}

var writeStream = fs.createWriteStream('./data/input.txt');

writeStream.write(str);
// 标记写入完成1 
writeStream.end();

writeStream.on('finish',()=>{
    console.log('写入完成');
})

