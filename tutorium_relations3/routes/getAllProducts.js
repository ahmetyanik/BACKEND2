

var express = require('express');
const { getAllProducts } = require('../Controller/Product.controller');
var router = express.Router();

/* GET home page. */
router.get('/', getAllProducts );

module.exports = router;