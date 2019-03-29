var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  // nơi lưu trữ ảnh đc upload lên server
  destination: function(req, file, cb){
    cb(null, './public/uploads');
  },
  // quy định tên file đc upload lên
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});
var upload = multer({storage: storage});

var Category = require('../models/category');


/* GET home page. */
router.get('/', function(req, res, next) {
  Category.find({}, function(err, data){
    res.render('category/index', {categories: data});
  })
});

router.get('/cates/add', function(req, res, next){
  res.render('category/add-form');
});

router.post('/cates/save-add', upload.single('image'),function(req, res, next){
  // thu thập dữ liệu từ form
  let {name, description} = req.body;
  res.json(req.file);
  
  // tạo ra đối tượng mới dạng Category
  // let model = new Category();

  // // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
  // model.name = name;
  // model.image = image;
  // model.description = description;

  // // Lưu đối tượng với csdl
  // model.save();

  // // điều hướng website về danh sách danh mục
  // res.redirect('/');
});

router.get('/cates/remove/:cateId', function(req, res, next){
  Category.deleteOne({_id: req.params.cateId}, function(err){
    res.redirect('/');
  });
});

module.exports = router;
