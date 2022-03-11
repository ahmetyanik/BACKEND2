import express  from "express";
import {accessControl,zweiteAccessControl} from "./middleware.js";

const app = express();

const users =[
    {id:1, name:"Ahmet"},
    {id:2, name:"Ghania"}
]

app.get("/users",accessControl,zweiteAccessControl, (req,res)=>{

    res.json(users);
})


app.listen(3000,()=>{
    console.log("Server läuft...");
})