var express = require('express');
const addNewHersteller = require('../Controller/Hersteller.controller.js');
var router = express.Router();


router.post('/', addNewHersteller);
  
module.exports = router;

