var express = require('express');
const urunleriGetir = require('../Controller/urunGetir');
var router = express.Router();

/* GET home page. */
router.get('/', urunleriGetir);

module.exports = router;
