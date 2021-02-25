const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://admin:123456@localhost:27017'
const dbName = 'jianghui'
const client = new MongoClient(url, { useUnifiedTopology: true })



client.connect((err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('数据库连接成功');

    let db = client.db(dbName)
    // 查询
    // db.collection('user').find({}).toArray((err,data)=>{
    //     console.log(data,err);

    //     client.close();
    // })
    // 新增
    // db.collection('user').insertOne({'name':'江',age: 10},(err,data)=>{
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('新增成功')
    //     console.log(data)

    //     client.close();
    // })
    
    // 修改
    // db.collection("user").updateOne({"name": "jianghui"},{$set: { age: 100 }},(err,result)=>{
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log('修改成功')
    //     console.log(result)

    //     client.close();
    // })

    // 删除一条数据
    db.collection("user").deleteOne({'name': 'zhangsan1'},(err)=>{
        console.log('删除一条数据成功')
        client.close();
    })

    // 删除多条数据
    db.collection("user").deleteMany({'name': 'zhangsan1'},(err)=>{
        console.log('删除一条数据成功')
        client.close();
    })
})
