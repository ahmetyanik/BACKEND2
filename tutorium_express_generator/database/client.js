const express = require("express");
const {MongoClient} = require("mongodb");
require('dotenv/config');


const uri = process.env.DABATASE_URI;

const client = new MongoClient(uri);


module.exports = client;




