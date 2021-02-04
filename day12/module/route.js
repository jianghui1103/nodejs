const url = require('url');
const fs = require('fs')
const path = require('path');

// 拓展res
function changeRes(res){
    res.send = (data)=>{
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end(data)
    }
}
// 根据后缀名获取文件类型
function getFileMime(extname) {
    let data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname]
}

function initStatic(req,res,staticPath){
    // 获取地址
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html':pathname;
    let extname = path.extname(pathname)
    // 通过fs模块读取文件
    try {
        let data = fs.readFileSync('./' + staticPath + pathname);
        if(data) {
            let mime =getFileMime(extname);
            res.writeHead(200,{'Content-Type': '' + mime +';charset=utf-8'})
            res.end(data);
        }else {

        }
    } catch (error) {
    }


}


// 
let server = ()=>{
    const G = {
        _get: {},
        _post: {},
        staticPath: 'static'
    }


    let app = function(req,res){
        // 拓展的res的方法
        changeRes(res)
        // 配置静态web服务
        initStatic(req,res,G.staticPath)
        let pathname = url.parse(req.url).pathname;
        let method = req.method.toLowerCase();
        if(G['_'+method][pathname]){
            if(method == 'get') {
                G._get[pathname](req,res) // 调用方法
            }else {
                // post 获取post数据 把他绑定到req.body
                let postData = '';
                req.on('data',(chunk)=>{
                    postData += chunk
                })

                req.on('end',()=>{
                    req.body = postData;
                    G._post[pathname](req,res)
                })
            }
           
        }else{
            res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
            res.end('这个页面不存在')
        }
    }
    // 配置get请求
    app.get = function(string, cb){
        // 注册方法
        G._get[string] = cb
    }
    // 配置post请求
    app.post = function(string, cb){
        // 注册方法
        G._post[string] = cb
    }
    // 配置静态web服务目录
    app.static = function(staticPath){
        G.staticPath = staticPath
    }

    return app
}




module.exports = server();