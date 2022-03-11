var express = require('express');
const ureticiGetir = require('../Controller/ureticiGetir');
var router = express.Router();

/* GET home page. */
router.get('/', ureticiGetir);

module.exports = router;
