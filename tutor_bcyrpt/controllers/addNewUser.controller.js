const bcrypt = require("bcrypt");
const User = require("../model/User.model.js");

async function addNewUser(req, res) {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newObject = { username: username, password: hashedPassword };

  await User.create(newObject);

  res.json(newObject);
}


async function getUsers(req,res){

    const {username, password} = req.body;

    const hashedObject = await User.findOne({username:"fatih yanik"});

    const isTrue = await bcrypt.compare(password,hashedObject.password)

    res.send(isTrue)

}

module.exports = {addNewUser,getUsers};
