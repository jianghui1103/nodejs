const url = require('url');


const G = {}

let app = function(req,res){
    let pathname = url.parse(req.url).pathname;

    if(G[pathname]){
        G[pathname](req,res) // 调用方法
    }else{
        res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
        res.end('这个页面不存在')
    }
}

app.get = function(string, cb){
    // 注册方法
    G[string] = cb
}

module.exports = app;