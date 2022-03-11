const express = require("express");
const {accessControl,secondMiddleware} = require("./middleware.js");

const app = express();

const users = [
    {id:1 , name : "Mustafa Murat Coskun", place:"Ankara"},
    {id:2 , name : "Serhat Say", place:"Istanbul"}
];

app.get("/users", accessControl,secondMiddleware, (req,res,next)=>{
    res.json(users);
});


app.get("/products", accessControl, (req,res,next)=>{
    res.send("Products");
});


app.listen(4000, ()=>{

    console.log("Server calisiyor...");
})