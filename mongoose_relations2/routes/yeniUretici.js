var express = require('express');
const ureticiOlustur = require('../Controller/ureticiOlustur');
var router = express.Router();

/* GET users listing. */
router.post('/', ureticiOlustur);

module.exports = router;