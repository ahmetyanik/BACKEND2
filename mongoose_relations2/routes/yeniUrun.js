var express = require('express');
const urunOlustur = require('../Controller/urunOlustur');
var router = express.Router();

/* GET users listing. */
router.post('/', urunOlustur);

module.exports = router;