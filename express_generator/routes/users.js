var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
const dotenv = require('dotenv/config');

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology:true});
client.connect(async err=>{
  console.log("Connected to DB");
})

/* GET users listing. */
router.get('/', async function(req, res, next) {

  const collection = client.db("ricky").collection("chars");

  const allUsers = await collection.find().toArray();
  res.json(allUsers);


});

module.exports = router;
