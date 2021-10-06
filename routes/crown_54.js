var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_54', { title: 'Express',name: 'Elmer', id: '207410654' });
});

module.exports = router;
