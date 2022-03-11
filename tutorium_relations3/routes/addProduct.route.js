var express = require('express');
const addNewProduct = require('../Controller/Product.controller');
var router = express.Router();


router.post('/', addNewProduct);
  
module.exports = router;

