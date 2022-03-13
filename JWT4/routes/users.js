var express = require("express");
var router = express.Router();
const User = require("../model/Usermodel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const auth = require("../middleware/authmiddleware");
dotenv.config();

/* KENDI SAYFAM*/
router.get("/users/me", auth, (req, res) => {
  res.json({
    mesaj: `${req.sonuc.username} sayfaniza hosgeldiniz...`,
  });
});

/* LOGIN SAYFASI */

router.post("/users/giris",async (req,res)=>{

  const bulunanKisi = await User.findOne({email:req.body.email, password:req.body.password});

  if(bulunanKisi){

    const token = jwt.sign({username:bulunanKisi.username,role:bulunanKisi.role}, process.env.JWT_SECRET_KEY, {expiresIn:"1d"} );


    res.json({token:token })


  }else{

    res.send("Kisi bulunamadi...")
  }


})


/* VERITABANINA KISI EKLEME */

router.post("/users/add", async(req,res)=>{

  try{

    const user = await User.create({

      username : req.body.username,
      role:req.body.role,
      email:req.body.email,
      password:req.body.password
    })

    res.json("User olusturuldu...");

  }catch(err){

    res.send(err);
  }
})


module.exports = router;
