const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    // 配置上传的目录
    destination: function(req,file,cb) {
        cb(null, 'static/uploads') // 上传目录必须存在
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

var router = express.Router()

router.get('/',(req,res)=>{
    res.send('导航列表')
})
router.get('/add',(req,res)=>{
    res.render('admin/nav/add.html')
})
router.get('/edit',(req,res)=>{
    res.send('修改导航')
})
router.post('/doAdd',upload.single('pic'),(req,res)=>{
    // 获取表单传进来的数据
    var body = req.body;
    
    res.send({
        body: req.body,
        file: req.file
    })
})
router.post('/doEdit',(req,res)=>{
    res.send('执行修改')
})
module.exports = router