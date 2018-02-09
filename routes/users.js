var express = require('express');
var router = express.Router();
var storage = require('../services/storage.js');
var User = require('../services/ModeloUser.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users: storage.getAll() });
});

router.get('/:id', function(req, res, next) {
  res.render('user', { user: storage.getOne(req.params.id) });
});

module.exports = router;