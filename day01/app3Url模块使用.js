const url = require('url');

var api = "http://www.baidu.com?name=zhang&age=17";
// console.log(url.parse(api,true))

var getValue = url.parse(api,true).query;
console.log(getValue.name,getValue.age)


