const collection = require("../database/collection.js");


async function getAllUsers(req,res){

    const allUsers = await collection.find({}).toArray();

    res.json(allUsers)
}

module.exports = getAllUsers;