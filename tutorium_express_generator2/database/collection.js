const client = require("./datenbank.js")

const collection = client.db("generator2").collection("users");

module.exports = collection;
