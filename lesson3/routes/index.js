var express = require('express');
var router = express.Router();
var multer = require('multer');
var shortid = require('shortid');

var storage = multer.diskStorage({
  // nơi lưu trữ ảnh đc upload lên server
  destination: function(req, file, cb){
    cb(null, './public/uploads');
  },
  // quy định tên file đc upload lên
  filename: function(req, file, cb){
    cb(null, shortid.generate() + "-" + file.originalname);
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
  // res.json(req.file);
  
  // tạo ra đối tượng mới dạng Category
  let model = new Category();

  // Cập nhật lại thông tin đối tượng vừa tạo với dữ liệu thu thập được từ form
  model.name = name;
  model.image = req.file.path.replace('public', '');
  model.description = description;

  // Lưu đối tượng với csdl
  model.save(function(err){
    // điều hướng website về danh sách danh mục
    res.redirect('/');
  });
});

router.get('/cates/edit/:cId', function(req, res, next){

  var cId = req.params.cId;

  Category.findOne({_id: cId}, function(err, data){
    if(err){
      res.send('id khong ton tai');
    }

    res.render('category/edit-form', {cate: data});
  });
});

router.post('/cates/save-edit', upload.single('image'), function(req, res, next){
  
  // neu khong upload anh => req.file == null
  let {id, name, description} = req.body;
  Category.findOne({_id: id}, function(err, model){
    if(err){
      res.send('Id khong ton tai');
    }

    model.name = name;
    model.description = description;
    if(req.file != null){
      model.image = req.file.path.replace('public', '');
    }
    model.save(function(err){
      if(err){
        res.send('cap nhat khong thanh cong');
      }

      res.redirect('/');
    })
  })

});

router.get('/cates/remove/:cateId', function(req, res, next){
  Category.deleteOne({_id: req.params.cateId}, function(err){
    res.redirect('/');
  });
});

module.exports = router;
