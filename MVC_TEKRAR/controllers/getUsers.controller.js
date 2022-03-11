const User = require("../models/Users")


const getUsers = async (req, res) => {
    
     const tumUserlar = await User.find();

     res.json(tumUserlar);

}

module.exports = getUsers;