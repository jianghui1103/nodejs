const fs = require('fs');

//1. fs.stat 检测文件还是目录
/*
fs.stat('./html',(err,data)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
})
*/

/*
fs.stat('./package.json',(err,data)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
})
*/

//2. fs.mkdir 创建目录
/*
    path     将穿件的路径
    mode     目录权限(读写权限),
    callback 回调，传递异常参数err
*/

/*
fs.mkdir('./css',(err)=>{
    if(err) {
        console.log(err)
        return;
    }
    console.log('创建成功')
})
*/
