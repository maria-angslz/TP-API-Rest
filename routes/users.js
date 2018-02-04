var express = require('express');
var router = express.Router();
var storage = require('../services/storage.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express', users: storage.getAll() });
});

module.exports = router;
