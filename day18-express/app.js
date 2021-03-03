const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    res.send("你好")
})

app.get('/article',(req,res)=>{
    res.send('新闻页面')
})

app.get('/login',(req,res)=>{
    res.send('登录')
})

app.get('/register',(req,res)=>{
    res.send('注册')
})

app.post('/doLogin',(req,res)=>{
    console.log('登录执行')
    res.send('执行登录')
})

app.put('/editUser',(req,res)=>{ //put: 主要用于修改数据
    console.log('修改用户')
    res.send('修改用户')
})

app.delete('/deleteUser',(req,res)=>{ // delete 主要用于删除数据
    console.log('删除用户')
    res.send('删除用户')
})
app.get('/admin/user',(req,res)=>{
    res.send('admin/user')
})


// 动态路由 配置路由的时候也要注意顺序
app.get('/article/:id',(req,res)=>{
    var id = req.params['id']; //获取动态路由
    res.send('动态路由'+id)
})

// get传值 
app.get('/product',(req,res)=>{
    let query = req.query; // 获取get 传值
    res.send('product'+query.id)
})

app.listen(3000)