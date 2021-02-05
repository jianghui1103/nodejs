const http = require("http");
const app = require('./module/route')
const ejs = require('ejs')
const fs = require('fs')

http.createServer(app).listen(3000)

app.static("static")

app.get('/login',function(req,res){
    ejs.renderFile('./view/form.ejs',{},(error,data)=>{
        res.send(data)
    })
})

app.post('/doLogin',function(req,res){
    console.log(req.body);
    res.send(req.body)

})