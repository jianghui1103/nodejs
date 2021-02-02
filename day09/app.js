const http = require('http');
const routes = require('./module/routes')
const url = require('url');
const ejs = require('ejs');


http.createServer(function(req,res) {
    routes.static(req,res,'static')
    let pathname = url.parse(req.url).pathname;

    if(pathname == '/login') {
        let msg = "数据库里面的数据";
        let list = [
            {title: '新闻111'},
            {title: '新闻222'},
            {title: '新闻333'}
        ]

        ejs.renderFile('./view/login.ejs',{msg,list},(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
            res.end(data);
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

