var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  res.redirect('/users');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
