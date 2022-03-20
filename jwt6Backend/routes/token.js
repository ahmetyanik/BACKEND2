var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.post('/', async function(req,res){

  const token = await jwt.sign("ahmet", "sifre");

  console.log("ÜRETILEN TOKEN:",token)

  res.json({
    token:token
  })

});

module.exports = router;
