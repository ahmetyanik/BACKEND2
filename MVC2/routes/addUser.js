var express = require('express');
var router = express.Router();
var addNewUser = require("../controllers/addUser.controller.js")

/* GET users listing. */
router.post('/', addNewUser);

module.exports = router;