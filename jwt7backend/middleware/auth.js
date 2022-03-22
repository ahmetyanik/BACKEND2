const jwt = require("jsonwebtoken");


async function auth (req,res,next){

    try{

        const authorizationFromHeader = req.get("Authorization");
    
       const token = authorizationFromHeader.split(" ")[1];
    
       const isTokenTrue = jwt.verify(token,"password");
    
       console.log("ERGEBNIS:",isTokenTrue);

       if(isTokenTrue){
           next();
       }

    }catch(err){
        console.log("Unauthorized!!!");
    }


}

module.exports = auth;