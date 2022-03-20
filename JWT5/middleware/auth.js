const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  const token = authHeader.split(" ")[1];

  console.log("TOKEN:", token);

  // token verifizieren
  const userEmail = jwt.verify(token, "sifre");

  if (userEmail) {
    next();
  } else {
    next("Token is not valid");
  }
};
