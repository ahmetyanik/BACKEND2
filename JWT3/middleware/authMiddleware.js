const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');



const auth = async (req, res, next) => {
    try {
        //   const alinanToken = req.header("Authorization").split(" ")[1];
        
        const alinanToken =  localStorage.getItem("authorization");
        const tokenSifresi = process.env.JWT_SECRET_KEY;
        
        
        
        
        const sonuc =  jwt.verify(alinanToken, tokenSifresi);

        console.log(sonuc);


        if(sonuc.role === "admin"){

            next();
            
        }else{

            res.json({mesaj:"Giris yetkiniz bulunmamaktadir!"})
        }

    


  } catch (err) {
    res.json({
      mesaj: "Auth hatasi olustu!",
    });
  }
};

module.exports = auth;
