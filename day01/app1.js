// 引入http模块
var http = require('http');


/*
    request 获取url传过来的信息
    response 给浏览器响应的信息
*/
http.createServer(function (request, response) {
    //设置响应头
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 给页面上输出
    response.end('Hello world');
}).listen(8081); // 监听8081端口

console.log('server running at http://127.0.1:8081');