const express = require("express");

const app = express();

app.get("/", (req,res)=>{

    res.send("Main page...")

})

app.get("/about", (req,res)=>{

    res.send("About page...")

})


app.get("*",(req,res)=>{
    res.status(404).send("404 Fehler...")
})



app.listen(3005, () => {
  console.log("Server arbeitet...");
});
