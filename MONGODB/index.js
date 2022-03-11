const express = require("express");
const mongoose = require("mongoose");



const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));


const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    }, () =>
    console.log("connected"));


app.listen(3002,()=>{
    console.log("Server calisiyor...");
})
