// https://www.bilibili.com/video/BV11t411k79h?p=23 23节

1. 进入mongo数据库
    在操作命令行里面输入mongo就进入了

2. 使用数据库，创建数据库
    1. use 库名 // 切换到数据库
    2. db.表名.insert({'name':'jianghui'}) //在库里面添加了一个表，向表里插入一条数据
    3. show collections // 查看表/集合
    4. db.表名.find() // 查询表里面的数据

3. 删除数据库
    1. use 库名 // 切换到数据库
    2. db.dropDatabase() // 删除该数据库

4. 删除指定表/集合
    1. use 库名 // 切换到数据库
    2. db.表名.drop() // 删除

5. 查找数据
    1. use jh // 切换到数据库
    2. db.user.find({'age':13})// 查询user表里面 age为13 的数据
    3. db.user.find({'age': {$gt:22}}) // 查询 age > 22 的数据
    4. db.user.find({'age': {$lt:22}}) // 查询 age < 22 的数据
    5. db.user.find({'age': {$gte:22}}) // 查询 age > = 22 的数据
    6. db.user.find({'age': {$lte:22}}) // 查询 age < =22 的数据
    7. db.user.find({'age': {$gte:11,$lte:22}}) // 查询 11 > = age < =22 的数据
    8. db.user.find({'name': /jiang/}) //查询name中包含jiang的数据
    9. db.user.find({'name': /^jiang/}) //查询name中以jiang开头的的数据
    10. db.user.find({'name': /jiang$/}) //查询name中以jiang结尾的数据
    11. db.user.find({},{age:1}) // 只显示age列
    12. db.user.find({'name': /^jiang/},{age:1}) //查询name中以jiang开头的的数据并且只显示age列
    13. db.user.find().sort({age:1}) 按照age排序 1为升序 -1 为降序
    14. db.user.find('name': 'jianghui',age:13) // 多属性查询
    15. db.user.find().limit(5) // 查询前五条数据
    16. db.user.find().skip(10) // 查询10条以后的数据
    17. db.user.find().skip(5).limit(5) // 查询5条之后的5条数据
    18. 

6. 分页查询
    1. db.user.find().skip(10).limit(10) // 从第10个开始查10条数据 10-19条数据
    2. skip((page-1)*pagesize).limit(pagesize)

7. 或查询
    1. db.user.find({$or:[{name:'wangwu'},{name: 'lizi'}]})

8. update
    1. db.user.update({name:'zhangsan'},{$set:{'age':10}})
    2. 不加$set就是整条更新
    3. {multi: true} 符合条件的全部更新

9. remove
    1. db.user.remove({age: {$gt: 30}}) 删除age大于30 的数据
    2. db.user.remove({age: {$gt: 30}},{justOne: true}) 删除age大于30 的数据 并且只删除一条

10. 查看执行时间
    1. db.user.find({"username":"zhangsan"}).explain("executionStats")

索引,索引可以使查询更加迅速
1. 创建索引 
    db.user.ensureIndex({"username":1}) //1为升序 -1为降序

2. 获取当前集合索引
    db.user.getIndexes()

3. 删除索引
    db.user.dropIndex({"username":1})

4. 复合索引
    db.user.ensureIndex({"username":1,"age":1})
    // 执行时， 查询username会命中索引,age不会

5. 唯一索引(不能重复)
    db.user.ensureIndex({"age":1},{"unique":true})
    // age 作为唯一索引不能重复，不能拥有两个相同的age = n 的

# 账户权限设置

查看当前管理员
show users
删除管理员
db.dropUser('jianghui')
修改密码
db.updateUser('admin',{'pwd':'123456'});
密码认证
db.auth('admin','password')


1. 创建
db.createUser({user:'admin',pwd:'123456',roles:[{role:'root',db:'admin'}]})
// root 表示超级管理员 dbOwner 数据库管理角色

2. 修改数据库配置文件
C:\Program Files\MongoDB\Server\4.0\bin\mongod.cfg
security:
  authorization: enabled

3. 重启mongo服务
    win+r 输入 services.msc 找到mongo服务 重新启动

4. 以管理员身份链接数据库
    mongo admin -u admin -p 123456

5. 给指定的数据库设置单独的权限
    db.createUser({user:'jianghui',pwd:'123456',roles:[{role:'dbOwner',db:'jianghui'}]})

6. 链接数据库
    mongo jianghui -u jianghui -p 123456

7. nodejs链接数据库
    const url = 'mongodb://admin:123456@localhost:27017'
