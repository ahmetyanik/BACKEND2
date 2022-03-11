const express = require("express");
const {MongoClient} = require("mongodb");
require("dotenv/config");

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri);

module.exports = client;