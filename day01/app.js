const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    console.log(req.url);

    if(req.url !== '/favicon.ico') {
        let getValue = url.parse(req.url,true).query;
        console.log(getValue.name, getValue.age);
    }

    res.writeHead(200, {"Content-type": "text/html;charset=utf-8"});

    res.write('这是 nodejs2');
    res.end();
}).listen(8081); 

