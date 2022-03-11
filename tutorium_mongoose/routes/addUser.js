const express = require("express");
const router = express.Router();
const addUserController = require("../controllers/addUser.controller.js")


router.post("/",addUserController)

module.exports = router;