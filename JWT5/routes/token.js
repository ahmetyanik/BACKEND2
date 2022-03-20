var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.post('/', async function (req, res, next) {

  const token = await jwt.sign("ahmet", "sifre")

  console.log(token);

  res.json({
    token:token
  });
});

module.exports = router;
