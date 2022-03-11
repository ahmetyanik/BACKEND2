const express = require("express");

const app = express();


app.get("/", (req,res)=>{

    res.send("Ahmet Yanik")
})


app.listen(3000, ()=>{
    console.log("Server arbeitet...");
});