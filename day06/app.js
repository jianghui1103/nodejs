const fs = require('fs');
var data = '我是数据库中获取的数据';

var readStream = fs.createReadStream('./aaa.png');
var writeStream = fs.createWriteStream('./data/aaa.png');

readStream.pipe(writeStream)