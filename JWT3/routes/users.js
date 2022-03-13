var express = require("express");
var router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../model/Usermodel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const sifre = process.env.JWT_SECRET_KEY;

/* GET users listing. */
router.get("/me", authMiddleware, (req, res, next) => {

  console.log("AUTH:",req.headers.authorization);

  res.json({
    token:req.user,
    mesaj: "giris basarili",
  });
});

router.post("/giris", async (req, res) => {
  const bulunanKisi = await User.findOne({ email: req.body.email, password:req.body.password });

  console.log(bulunanKisi);

  
  if(bulunanKisi){
    
    const token = jwt.sign({username:bulunanKisi.username,role:bulunanKisi.role},sifre,{expiresIn:"1d"});


    res.json({username:bulunanKisi.username,role:bulunanKisi.role,token:token});
  }else{
    res.send("Kisi bulunamadi!!!")
  }

});

router.post("/add", async (req, res) => {


  try {
    const user = await User.create({
      username:req.body.username,
      role:req.body.role,
      email: req.body.email,
      password: req.body.password,
    });

    res.json(user);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
