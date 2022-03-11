const express = require("express");
const users = require("../users");
const router = express.Router();

router.getUser = (req, res) => {
  const age = req.query.age;

 

  const bulunanKisi = users.filter((kisi) => {
   

    return kisi.yas === parseInt(age);
  });

  res.json(bulunanKisi);
};

module.exports = router;
