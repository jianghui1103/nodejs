const http = require("http");
const app = require('./module/route')
const ejs = require('ejs')
const fs = require('fs')
const { MongoClient } = require('mongodb')
const url = 'mongodb://admin:123456@localhost:27017'
const dbName = 'jianghui'
const querystring = require('querystring')
// const client = new MongoClient(url, { useUnifiedTopology: true })

http.createServer(app).listen(3000)

app.get('/',function(req,res){
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=> {
        if(err) {
            console.log(err);
            return;
        }
        let db = client.db(dbName);
        db.collection('user').find({}).toArray((err,data)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log(data);
            ejs.renderFile("./view/index.ejs",{
                list: data
            },(err,data)=>{
                res.send(data)
            })
            client.close()
        })

    })

})

app.static("static")

app.get('/register',function(req,res){
    ejs.renderFile('./view/register.ejs',{},(error,data)=>{
        res.send(data)
    })
})

app.post('/doRegister',function(req,res){
    const body = querystring.parse(req.body)
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
        if(err) {
            console.log(err);
            return;
        }
        let db = client.db(dbName);
        db.collection('user').insertOne(body,(err,data)=>{
            if(err) {
                console.log(err);
                return;
            }
            console.log('添加成功')
            client.close()
            res.send('增加成功')
        })
    })
})