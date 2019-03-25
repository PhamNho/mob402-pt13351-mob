var express = require('express');
var router = express.Router();
var Category = require('../models/category');

/* GET home page. */
router.get('/', function(req, res, next) {
  Category.find({}, function(err, data){
    console.log(data);
    res.send('ok');
  })
});

module.exports = router;
