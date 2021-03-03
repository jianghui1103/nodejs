/*
1. 在app.js 的头上定义ejs
    var ejs = require('ejs');
2. 注册html模板引擎代码
    app.engine('html',ejs.__express)
3. 将模板引擎换成html
    app.set('view engine','html')
4. 修改模板文件的后缀为.html
*/


const express = require('express');
const ejs = require('ejs');
const app = express()

app.engine('html',ejs.__express)
app.set('view engine','html')
app.use(express.static('static'))
app.get('/',(req,res)=>{
    let title = '你好ejs';
    res.render('index',{
        title: title
    })
})

app.get('/news',(req,res)=>{
    let userinfo = {username: '张三',age:16};
    let h3 = "<h3>123</h3>"
    let list = ['11','22','33']
    let newList = [
        {
            title: 'news11',
        },
        {
            title: 'news22',
        },
        {
            title: 'news33',
        },
    ]
    res.render('news',{
        userinfo: userinfo,
        article: h3,
        flag: true,
        list,
        newList
    })
})
app.listen(3000)