var express = require('express');
var router = express.Router();
const {addUser,passwordControl} = require("../controller/user.controller.js");

/* GET users listing. */
router.get('/', passwordControl);

router.post("/", addUser);

module.exports = router;

