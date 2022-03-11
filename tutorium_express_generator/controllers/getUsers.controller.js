const collection = require("../database/collection");

async function getAllUsers(req,res){

    const allUsers = await collection.find({}).toArray();

    console.log(allUsers);

    res.json(allUsers);

}

module.exports = getAllUsers;