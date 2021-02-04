const G = {}

let app = function(req,res){
    if(G['/login']){
        G['/login'](req,res) // 调用方法
    }
}

app.get = function(string, cb){
    // 注册方法
    G[string] = cb
}

app.post = function(){
    console.log('post')
}

// 执行方法
app.get('/login',function(req,res){
    // res.send('hello world')
    console.log('执行login方法')
})

setTimeout(()=>{
    app('req','res')
},1000)