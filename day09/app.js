const http = require('http');
const routes = require('./module/routes')
const url = require('url');
const ejs = require('ejs');


http.createServer(function(req,res) {
    routes.static(req,res,'static')
    let pathname = url.parse(req.url).pathname;

    // 获取请求类型
    console.log(req.method)

    if(pathname == '/news') {
        var query = url.parse(req.url, true).query;
        console.log(query.age)
        res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
        res.end('get传值获取成功');

    }else if(pathname == '/register') {
        res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
        res.end('执行注册');
    }else if(pathname == '/admin') {
        res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
        res.end('处理后的业务逻辑');
    }else {
        res.writeHead(404,{'Content-Type': 'text/html ;charset=utf-8'})
        res.end('页面不存在');
    }

}).listen(3000)

