import express from "express";
import { Low, JSONFile } from "lowdb";

const app = express();
app.use(express.json());


const db = new Low(new JSONFile("logs.json"));
await db.read();

db.data ||= { logs: [] };

const logs = db.data.logs;


app.get("/:name/:age", (req,res)=>{

    const name = req.params.name;
    const age = req.params.age;
    logs.push({userName:name, userAge:age});
    db.write();  
    
    res.send(name)
})




app.listen(3008, ()=>{

    console.log("Server arbeitet...");
})