
const {MongoClient}  = require('mongodb');



// mongodb

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology:true});

client.connect(async err=>{
  console.log("Connected to DB");
})

module.exports = client;