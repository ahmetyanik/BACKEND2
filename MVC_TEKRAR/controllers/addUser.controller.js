const User = require("../models/Users.js");

const addUser = async  (req,res)=>{

    const newUser = req.body;
    console.log(newUser);

    await User.create(newUser);

    res.send(newUser);

}

module.exports = addUser;