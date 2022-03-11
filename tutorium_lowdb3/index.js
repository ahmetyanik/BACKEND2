import express from "express";

import { Low, JSONFile } from "lowdb";

const port = 3000;

const app = express();
app.use(express.json());

const db = new Low(new JSONFile("logs.json"));
await db.read();

db.data ||= { logs: [] };

const logs = db.data.logs;

app.get("/:name", (req,res)=>{

    const name = req.params.name;
    logs.push(name);
    db.write();
    res.send(logs.length.toString() + " geklickt...")

})

app.get("/delete/:index", (req,res)=>{

    const index = req.params.index;

    logs.splice(index,1);
    res.send(logs[parseInt(index)] + " silindi...");
    db.write();

})

app.post("/objeler/:urunAdi/:fiyat", (req,res)=>{

    const urunAdi = req.body.urunAdi;
    const fiyat = req.body.fiyat;

    const urun = {name : urunAdi, price:fiyat};

    logs.push(urun);
    res.send(urun)
    db.write();
})


app.listen(port,()=>{
    console.log(port + " dinleniyor");
})


