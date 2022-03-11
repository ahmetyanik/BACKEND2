const express = require("express");
const {Router} = require("express");
const {body} = require("express-validator");
const addDate = require("../controller/dates.controller");

var router = express.Router();


router.post('/',

body("name").exists().withMessage("Name is empty!").isString().withMessage("Name muss String sein!"),
body("age").isInt().withMessage("Age muss number sein!"),
body("geburtsDatum").isDate(),
body("now").isDate().isAfter()


, addDate);

module.exports = router;


