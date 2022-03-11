const bcrypt = require("bcrypt");
const User = require("../model/User");

async function passwordControl(req, res) {

    try{

        const {userName,password} = req.body;

        const hashedObject = await User.findOne({_id:"621e95d44e25d9ba80366914"}).select("+password");

        const isTrue = await bcrypt.compare(password, hashedObject.password);

        res.json(isTrue);


    }catch(err){

        res.send(err);
    }
  
}

async function addUser(req, res) {

  try{

    const {userName,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const newObject = {userName, password:hashedPassword};

    await User.create(newObject);

    res.status(201).send("New user created...");



  }catch(err){
      res.send(err);
  }

}

module.exports = { addUser, passwordControl };
