const collection = require("../database/collection.js");


async function addUserController(req,res){

    const newUser = await collection.insertOne(req.body);

    res.send(newUser);
}

module.exports = addUserController;