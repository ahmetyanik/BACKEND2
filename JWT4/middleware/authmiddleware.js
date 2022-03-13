const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = async (req,res,next)=>{

    try{

        const alinanToken = req.header("Authorization").split(" ")[1];

        const tokenSifresi = process.env.JWT_SECRET_KEY;

        const sonuc = jwt.verify(alinanToken,tokenSifresi);

        console.log(sonuc);

        req.sonuc = sonuc;

        if(sonuc.username === "ahmet"){

            next();

        }else{

            res.send("Giris yetkiniz bulunmamaktadir!")
        }


    }catch(err){

        res.json({
            mesaj:"Auth hatasi olustu!"
        })


    }
}

module.exports = auth;