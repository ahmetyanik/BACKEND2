const express = require("express");
const router = express.Router();


const getAllProducts = require("../Controller/product.controller");



router.post("/", getAllProducts);


module.exports = router