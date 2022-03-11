var express = require('express');
const getAllUsers = require('../controllers/getUsers.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllUsers);

module.exports = router;
