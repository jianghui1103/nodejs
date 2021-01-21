// const fs =require('fs');
// var path = './wwwroot'
// var dirArr = [];
// fs.readdir(path,(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     (function getDir(i){
//         if(i==data.length) {
//             // 执行完成
//             console.log(dirArr);
//             return;
//         }
//         fs.stat(path + '/' +data[i],(error,stats)=>{
//             if(stats.isDirectory()){
//                 dirArr.push(data[i]);
//             }
//             getDir(i+1);
//         })
//     })(0)
// })

// 1. 定义一个isDir的方法判断一个资源到底是目录还是文件
const fs =require('fs');

async function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(error,stats)=>{
            if(error) {
                console.log(error);
                reject(error);
                return;
            }
            if(stats.isDirectory()){
                resolve(true);
            }else {
                resolve(false);
            }
        })
    })
}

function main(){
    var path = './wwwroot'
    var dirArr = []
    fs.readdir(path,async (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        for(var i=0;i<data.length;i++) {
            if(await isDir(path + '/' +data[i])) {
                dirArr.push(data[i])
            }
        }
        console.log(dirArr)
    })
}

main()