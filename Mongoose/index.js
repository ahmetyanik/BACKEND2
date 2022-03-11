import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import User from "./User.js";

const corsOptions = {
  origin: "http://localhost:3000",
  credential: true,
  optionSuccessStatus: 200,
};

const uri = process.env.DATABASE_URI;

const app = express();

app.use(cors(corsOptions));


app.use(express.json());

async function addUserController(req, res) {
  try {
    await User.create(req.body);

  } catch (err) {
    console.log(err);
    res.send(err);
  }

  res.send("User created...");
}

async function getAllUsers(req,res){

  const allUsers = await User.find({});

  res.json(allUsers);
}

app.post("/addUser", addUserController);

app.get("/", getAllUsers)

mongoose.connect(uri, (err) => {
  console.log("Connected to DB");
});

app.listen(3001, () => {
  console.log("Server arbeitet...");
});
