var express = require('express');
const getIndex = require('../controllers/index.controller');
var router = express.Router();

/* GET home page. */
router.get('/', getIndex );

module.exports = router;
