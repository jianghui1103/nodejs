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

// 3. fs.writeFile 创建写入文件
/*
    filename    (String)            文件名称
    data        (String | Buffer)   将要写入的内容，可以使用字符串 或 buffer 数据
    options     (Object)            options数组对象包含
    · encoding  (string)                可选值，默认为‘utf8’,当data使用buffer
    · node      (Number)                文件写入权限，默认值438
    · flag      (String)                默认值'w'
    callback { Function } 回调，传递一个异常参数err
*/

/*
fs.writeFile('./html/index.html','你好nodejs',(err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('创建写入成功');
})
*/

// 4. fs.appendFile 追加文件
/*
fs.appendFile('./css/base.css','body{color:red}',(err)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log('appendFile成功')
})
*/

// 5. fs.readFile 读取文件
fs.readFile('./html/index.html',(err,data)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString()); // 把 buffer转成string类型
})

