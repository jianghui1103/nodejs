const fs = require('fs')
const path = require('path');
const url = require('url');
const ejs = require('ejs');

function getFileMime(extname) {
    let data = fs.readFileSync('./data/mime.json');
    let mime = JSON.parse(data.toString());
    return mime[extname]
}

exports.static = function(req,res,staticPath) {
    
}



let app = {
    static:(req,res,staticPath)=>{
        // 获取地址
        let pathname = url.parse(req.url).pathname;
        pathname = pathname === '/' ? '/index.html':pathname;
        let extname = path.extname(pathname)

        // 通过fs模块读取文件
        if(pathname !== '/favicon.ico') {

            try {
                let data = fs.readFileSync('./' + staticPath + pathname);
                if(data) {
                    let mime =getFileMime(extname);
                    res.writeHead(200,{'Content-Type': mime +';charset=utf-8'})
                    res.end(data);
                }
            } catch (error) {
            }
            
        }

    },
    login:(req,res)=>{
        // 处理业务逻辑
        ejs.renderFile('./view/form.ejs',{},(err,data)=>{
            res.writeHead(200,{'Content-Type': 'text/html ;charset=utf-8'})
            res.end(data)
        })
    },
    news:(req,res)=>{
        res.end('news')
    },
    doLogin:(req,res)=>{
        res.end('doLogin')

    },
    error:(req,res)=>{
        res.end('error')

    }
}

module.exports = app;