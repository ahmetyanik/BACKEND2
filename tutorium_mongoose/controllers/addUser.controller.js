
const User = require("../models/User.js");

async function addUserController(req, res) {

  try{

    await User.create(req.body);

  }catch(err){

    console.log(err);
    res.send(err)
  }

 

  res.send("User created...");
}

module.exports = addUserController;
