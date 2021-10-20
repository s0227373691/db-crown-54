var express = require('express');
var router = express.Router();
const apiCrown2Controller_54 = require('../controllers/apiCrown2Controller_54')

/* GET home page. */
router.get('/category_54', apiCrown2Controller_54.getCategories);

module.exports = router;
