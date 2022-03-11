const express = require("express");

const port = 3001;
const app = express();
app.use(express.json());


app.get("/",(req,res)=>{

    res.send("OK");
})

app.post("/", (req,res)=>{

    const body = req.body;
    console.log(body);

    res.send(body)

})




app.listen(port, ()=>{
    console.log(port + " arbeitet...");
})