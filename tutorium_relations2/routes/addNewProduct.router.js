const express = require("express");
const router = express.Router();


const addNewProduct = require("../Controller/product.controller");



router.post("/", addNewProduct);


module.exports = router