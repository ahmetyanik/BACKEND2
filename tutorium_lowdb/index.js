import express from "express";

import { Low, JSONFile } from "lowdb";

const port = 4005;

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




app.listen(port,()=>{
    console.log(port + " dinleniyor");
})