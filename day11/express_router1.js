const http = require("http");
const app = require('./module/route')

http.createServer(app).listen(3000)
console.log('server running')

app.get('/login',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('hello world')
})
app.get('/new',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('新闻')
})
app.get('/doLogin',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('hello world')
})