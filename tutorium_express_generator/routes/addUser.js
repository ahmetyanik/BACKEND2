const express = require("express");
const router = express.Router();
const client=require("../database/client.js");
const addUserController = require("../controllers/addUser.controller.js")


router.post("/",addUserController)

module.exports = router;