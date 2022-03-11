var express = require('express');
var router = express.Router();
var getUsers = require("../controllers/user.controller.js");

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
