const jwt = require("jsonwebtoken");


module.exports = async (req,res,next)=>{

    const authFromHeader = req.get("Authorization");

    const token = authFromHeader.split(" ")[1];

    const dogrula = jwt.verify(token,"sifre");

    if(dogrula){
        next();
    }else{
        next("Token is not valid!")
    }



}