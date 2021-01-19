const http = require('http');

const tools = require('./modules/toos');

http.createServer(function (req, res) {


    res.writeHead(200, {"Content-type": "text/html;charset=utf-8"});
    res.write('这是 nodejs2');
    var api = tools.formatApi('asd');
    res.write(api);
    res.end();
}).listen(8081); 

