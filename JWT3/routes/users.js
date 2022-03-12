var express = require("express");
var router = express.Router();
const auhtMiddleware = require("../middleware/authMiddleware");
const User = require("../model/Usermodel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');


const sifre = process.env.JWT_SECRET_KEY;

/* GET users listing. */
router.get("/me", auhtMiddleware, (req, res, next) => {


  res.json({
    mesaj: "Buraya ulastin. Bravo!!!",
  });
});

router.post("/giris", async (req, res) => {
  const bulunanKisi = await User.findOne({ username: req.body.username });

  
  if(bulunanKisi){
    
    const token = jwt.sign({username:bulunanKisi.username,role:bulunanKisi.role},sifre,{expiresIn:30});

    localStorage.setItem("authorization",token);

    res.json(bulunanKisi);
  }else{
    res.send("Kisi bulunamadi!!!")
  }

});

router.post("/add", async (req, res) => {

  try {
    const user = await User.create({
      username: req.body.username,
      role: req.body.role,
    });

    res.json({ message: "User olusturuldu..." });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
