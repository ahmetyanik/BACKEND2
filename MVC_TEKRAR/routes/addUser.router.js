var express = require('express');
const addUser = require('../controllers/addUser.controller');
var router = express.Router();


router.post("/",addUser);

module.exports = router;