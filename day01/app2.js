var http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {"Content-type": "text/html;charset=utf-8"});
    res.write('这是 nodejs');
    res.end();
}).listen(8081); 

