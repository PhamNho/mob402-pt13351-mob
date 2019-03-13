var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product/add', function(req, res, next){
  res.render('product/add');
});

module.exports = router;
