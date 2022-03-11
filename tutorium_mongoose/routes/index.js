var express = require('express');
const getAllUsers = require('../controllers/getUsers.controller');
var router = express.Router();

/* GET home page. */
router.get('/', getAllUsers);

module.exports = router;
