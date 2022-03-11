import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import User from "./Users.js"

const app = express();
app.use(express.json());

const uri = process.env.DATABASE_URI;

async function addUserController(req,res){

    try{
        await User.create(req.body);
    }catch(err){

        console.log(err);
        res.send(err);
    }

    res.send("Kullanici created...")
}

async function getUserController(req,res){

    const allUsers = await User.find({});

    res.json(allUsers);

}

app.get("/",getUserController);
app.post("/addUser", addUserController);


mongoose.connect(uri,(err)=>{
    console.log("Database'e baglanildi...");
});

app.listen(3001,()=>{

    console.log("Server calisiyor...");
})