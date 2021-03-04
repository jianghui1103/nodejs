const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser('jianghui'))

app.get('/',(req,res)=>{

    
    // 设置cookie
    res.cookie('username', 'zhangsan',{
        maxAge: 1000*60*60, // 多少时间后过期
        signed: true, //加密
        // path: '/news', // 只能在news中访问
        // domain: '.jh.com'    //在哪些域名中共享cookie 只能在二级域名访问 aaa.jh.com bb.jh.com 都可共享域名
    })

    /*
    cookie加密
    1. 配置中间件的时候需要传入加密的参数
    app.use(cookieParser('jianghui'))
    2. 设置cookie加密属性 res.cookie('username', 'zhangsan',{maxAge: 1000*60*60,signed: true,})
    3. 解密
    req.signedCookies.username
    */

    res.send('首页')
 })



app.get('/news',(req,res)=>{
    // 获取cookie
    let username = req.cookies.username;
    res.send('新闻'+username)
})

app.get('/user',(req,res)=>{
    let username = req.signedCookies.username
    res.send('用户'+username)
})

app.listen(3000)