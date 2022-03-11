const express = require('express');
const client = require('./client');


const collection = client.db("generator").collection("user");

module.exports = collection;