const express = require('express');
const ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')

// 引入外部模块
const api = require('./routes/api')
const index = require('./routes/index')
const admin = require('./routes/admin')


// 配置第三方中间件
app.use(bodyParser.urlencoded({extended:false}))
// parse application/json
app.use(bodyParser.json())

app.engine('html',ejs.__express)
app.set('view engine','ejs')

app.use(express.static('static'))

// 挂载模块
app.use('/admin',admin)
app.use('/api',api)
app.use('/',index)

app.listen(3000)