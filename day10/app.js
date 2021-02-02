const http = require('http');
const routes = require('./module/routes')
const url = require('url');
const ejs = require('ejs');


http.createServer(function(req,res) {
    routes.static(req,res,'static')
    let pathname = url.parse(req.url).pathname.replace('/','');
    
    try {
        routes[pathname](req,res)
    }catch(error){
        routes['error'](req,res)
    }

}).listen(3000)

