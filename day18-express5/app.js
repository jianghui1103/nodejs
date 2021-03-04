/*
获取post传过来的数据
1. yarn add body-parser
2. var bodyParser = require('body-parser')
3. 配置中间件
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())
4. 接受post 数据
req.body
*/


const express = require('express');
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
// 配置第三方中间件
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())

app.engine('html',ejs.__express)
app.set('view engine','ejs')

app.use(express.static('static'))


app.get('/',(req,res)=>{
   res.send('首页')
})
app.get('/login',(req,res)=>{
    // req.query 获取get传值
    res.render('login.html',{})
 })

app.post('/doLogin',(req,res)=>{
    // req.body
    var body = req.body;
    console.log(body)
    res.send('执行提交'+body.username)
})
app.listen(3000)