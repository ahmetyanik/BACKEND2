const express = require("express");
const  { decrypt, encrypt } = require("./encryption.js");
const control = require("./kontrol.js");
const { getUser } = require("./router/getuser.js");
const { getuserbyid } = require("./router/getuserbyid.js");

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Anasayfa");
});

app.use("/user",control, getUser )

app.use("/user/:id", control, getuserbyid)


app.get("*", (req, res) => {
  res.send("404 Sayfa bulunamadi...");
});


app.post("/users", (req,res)=>{

    const obje = req.body.name;  

    
    res.json({"sifreliName": encrypt(obje)});
})

app.post("/sifrecoz", (req,res)=>{

    const sifreliName = req.body.sifreliName;  

    
    res.json({"cözülenMesaj": decrypt(sifreliName)});
})

app.listen(3000, () => {
  console.log("Express calisiyor...");
});
