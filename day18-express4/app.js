/*
    中间件： 就是匹配路由之前和匹配路由之后的一系列操作
    中间件可以用来做权限判断： 没有登录跳转到登录也面， 登录后跳转首页
    express 应用可以使用如下几种中间件： 应用级中间件，路由级中间件(用的少)，错误处理中间件，内置中间件，第三方中间件

*/


const express = require('express');
const app = express()

// 内置中间件
app.use(express.static('static'))


// 应用级中间件 (用于权限判断)
app.use((req,res,next)=>{
    console.log(new Date())
    next()
})

app.get('/',(req,res)=>{
    res.send("你好")
})

app.get('/news/add',(req,res)=>{
    res.send('增加新闻');
    next() // 路由级中间件 会走到下一个news/:id
})
app.get('/news/:id',(req,res)=>{
    res.send('新闻动态页面')
})
app.get('/login',(req,res)=>{
    res.send('登录')
})

// 错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send('404')
})

app.listen(3000)