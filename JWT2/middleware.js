import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getAccessTokenFromHeader } from "./helpers/authorization/tokenHelpers.js";
dotenv.config();

const middleware = (req, res, next) => {

  const {JWT_SECRET_KEY} = process.env;
 
  if (!(req.headers.authorization && req.headers.authorization.startsWith("Bearer:"))){

    return res.json("Token hatasi")
  }

  const accessToken = getAccessTokenFromHeader(req);


  jwt.verify(accessToken,JWT_SECRET_KEY,(err,decoded)=>{

    if(err){
      return res.json("Erisim hatasi")
    }

    console.log(decoded);
    next();
  })
};

export default middleware;
