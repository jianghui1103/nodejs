const fs = require('fs');

var path = './upload'

fs.stat(path,(err,data)=>{
    if(err) {
        // 执行创建目录
        mkdir(path);
        return;
    }
    if(!data.isDirectory()) {
        // 首先删除文件，  执行创建目录
        fs.unlink(path,(err)=>{
            if(!err){
                mkdir(path);
            }else{
                console.log('删除失败，检查参入的数据是否正确')
            }
        });
    }
})


// 创建目录方法
function mkdir(dir) {
    fs.mkdir(dir,(err)=>{
        if(err) {
            console.log(err,'创建失败');
        }
    });
}