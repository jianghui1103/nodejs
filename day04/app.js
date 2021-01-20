const fs =require('fs');
var path = './wwwroot'
var dirArr = [];
fs.readdir(path,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    (function getDir(i){
        if(i==data.length) {
            // 执行完成
            console.log(dirArr);
            return;
        }
        fs.stat(path + '/' +data[i],(error,stats)=>{
            if(stats.isDirectory()){
                dirArr.push(data[i]);
            }
            getDir(i+1);
        })
    })(0)
})