const express = require("express");
const addUserController = require("../controls/addUser.controller.js");
const router = express.Router();
const client = require("../database/datenbank.js");


router.post("/",addUserController);

module.exports = router;