const express = require("express");
const router = express.Router();
const addNewHersteller = require("../Controller/hersteller.controller");


router.post("/", addNewHersteller);


module.exports = router;