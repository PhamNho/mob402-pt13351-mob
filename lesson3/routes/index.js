var express = require('express');
var router = express.Router();
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

router.post('/cates/save-add', function(req, res, next){
  // thu thập dữ liệu từ form
  let {name, image, description} = req.body;
  
  // tạo ra đối tượng mới dạng Category
  let model = new Category();

  // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
  model.name = name;
  model.image = image;
  model.description = description;

  // Lưu đối tượng với csdl
  model.save();

  // điều hướng website về danh sách danh mục
  res.redirect('/');
});

router.get('/cates/remove/:cateId', function(req, res, next){
  Category.deleteOne({_id: req.params.cateId}, function(err){
    res.redirect('/');
  });
});

module.exports = router;
