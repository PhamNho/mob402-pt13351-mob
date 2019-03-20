var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = [
    {
      id: 1,
      product_name: "Smart Tivi Màn Hình Cong Samsung 55 inch UA55MU6500KXXV",
      price: '15.590.000 ₫',
      image: 'https://salt.tikicdn.com/cache/w1200/ts/product/b4/fb/de/0dcc09ff7fd54952adee1298c2c55b4d.jpg'
    },
    {
      id: 2,
      product_name: "akjsdfhaksjdhfaskjhf",
      price: '15.590.000 ₫',
      image: 'https://salt.tikicdn.com/cache/w1200/ts/product/b4/fb/de/0dcc09ff7fd54952adee1298c2c55b4d.jpg'
    }
  ];
  res.render('index', {products: products});
});

router.get('/save-add', function(req, res, next) {
  var username = req.query.username;
  var gender = req.query.gender;
  if(gender == 1){
    gender = "Male"
  }else if(gender == 2){
    gender = "Female";
  }else {
    gender = "Other";
  }
  res.render('result', {username: username, gender: gender});
});

router.post('/save-add', function(req, res, next) {
  var username = req.body.username;
  var gender = req.body.gender;
  if(gender == 1){
    gender = "Male"
  }else if(gender == 2){
    gender = "Female";
  }else {
    gender = "Other";
  }
  res.render('result', {username: username, gender: gender});
});

router.get('/products/add', function(req, res, next){
  res.render('products/add-form');
});

module.exports = router;
