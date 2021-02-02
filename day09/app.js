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

    }else if(pathname == '/login'){
        // post 演示
        ejs.renderFile("./view/form.ejs",{},(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
            res.end(data);
        })
    }else if(pathname == '/doLogin'){
        // 获取post传值
        let postData = '';
        req.on('data',(chunk)=>{
            postData+=chunk
        })

        req.on('end',(chunk)=>{
            console.log(postData);
            res.end(postData)
        })


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

