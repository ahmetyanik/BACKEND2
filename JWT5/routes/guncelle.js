var express = require('express');
const guncelleController = require('../controller/guncelleController');
const auth = require('../middleware/auth');
var router = express.Router();

/* GET home page. */
router.put('/', auth, guncelleController);

module.exports = router;
