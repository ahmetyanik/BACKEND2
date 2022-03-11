var User = require("../models/Users");

async function addNewUser(req,res){

    await User.create(req.body);

    res.send("created...")

}


module.exports = addNewUser;