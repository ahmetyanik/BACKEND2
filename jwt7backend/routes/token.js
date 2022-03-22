var express = require('express');
const jwt = require("jsonwebtoken");
var router = express.Router();


router.post('/', async function(req, res) {

  const secretMessage = {
    person: "Ahmet Cruise",
    message: "Mission Impossible aber es geht!!!"
  }
  
  const token = await jwt.sign(secretMessage, "password");

  console.log("TOKEN IM SERVER:"+token);

  res.json(token);


});

module.exports = router;
