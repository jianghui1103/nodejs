/*
1. 安装npm install ejs --save

2. app.set('view engine','ejs')

3. 使用(默认加载模板引擎的文件夹是views)
res.render('index',{

})
*/


const express = require('express');
const app = express()
app.set('view engine','ejs')
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