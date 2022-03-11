
const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send({name:"ahmet", age:33})
})


app.get("/about", (req,res)=>{
    res.send("Hier ist about page");
})


app.listen(3000, ()=>{
    console.log("Server arbeitet...");
});