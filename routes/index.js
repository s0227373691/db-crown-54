var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '潘榆文', id: '207410654' });
});

module.exports = router;
