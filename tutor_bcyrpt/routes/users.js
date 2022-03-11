var express = require('express');
const {addNewUser, getUsers} = require('../controllers/addNewUser.controller');
var router = express.Router();


router.post('/add', addNewUser);  
router.post("/compare", getUsers)

module.exports = router;
