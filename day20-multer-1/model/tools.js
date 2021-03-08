const multer = require('multer');
const path = require('path');
const sd = require('silly-datetime')
const mkdirp = require('mkdirp')

let tools = {
    multer(){
        const storage = multer.diskStorage({
            // 配置上传的目录
            destination: function(req,file,cb) {
                // 1.获取当前日期 20210308
                let day = sd.format(new Date(), 'YYYYMMDD');
                let dir = path.join('static/upload',day)
                // 2. 按照日期生成图片储存目录
                mkdirp(dir).then(res=>{
                    cb(null, dir) // 上传目录必须存在
                })
            },
            // 修改上传文件名
            filename: function(req,file,cb) {
                // 获取后缀名
                let extname = path.extname(file.originalname)
                // 修改上传名字
                cb(null, Date.now() + extname)
            },
        })
        const upload = multer({storage})
        return upload     
    }
}

module.exports = tools