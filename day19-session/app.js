/*
1. 安装express-session
    yarn add express-session
2. 引入express-session
    let session = require('express-session')
3. 设置官方提供的中间件
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }))
4. 使用
    设置值 req.session.username = '张三'
    获取值 req.session.username

*/



const express = require('express')
const session = require('express-session')
const app = express()
// 配置session中间件
app.use(session({
    secret: 'this is jhsession', // 服务器端生成session签名
    name: 'jianghui', //修改session对应的cookie名称
    resave: false, // 强制保存 session 即使它并没有变化
    saveUninitialized: true, // 强制将未初始化的session储存
    cookie: {
        maxAge: 1000*60,
        secure: false // true表示只有https协议才能访问cookie
    },
    rolling: true //每次请求的时候重新设置cookie 的时间
}))


app.get('/',(req,res)=>{
    req.session.username = '张三'
    res.send('首页')
 })



app.get('/news',(req,res)=>{
    if(req.session.username) {
        res.send(req.session.username)
    }else{
        res.send('新闻')
    }
})

app.get('/user',(req,res)=>{
    res.send('用户')
})

app.get('/loginOut',(req,res)=>{
    // 设置session 的过期时间为0 会将所有的session清除
    // req.session.cookie.maxAge = 0;

    // 销毁指定session
    // req.session.username = ''

    // 销毁session destroy
    req.session.destroy()


    res.send('退出登录')
    
})

app.listen(3000)