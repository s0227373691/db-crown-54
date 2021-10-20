var express = require('express');
var router = express.Router();
const crown2Controller_54 = require('../controllers/crown2Controller_54')

/* GET home page. */
router.get('/', crown2Controller_54.getCategories);

module.exports = router;
