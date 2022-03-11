const express = require("express");
const app = express();

app.use(express.json());

const port = 3007;

app.get("/test", (req,res)=>{

    res.send("TEST");
});


app.post("/test", (req,res)=>{

    console.log(req.body);

    const body = req.body;   

    res.send(body);

})



app.listen(port, ()=>{
    console.log(port + " arbeitet...");
})