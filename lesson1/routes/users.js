var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('router /users/');
});

router.get('/add-new', function(req, res, next) {
  res.send('router users add new user form');
});

module.exports = router;
