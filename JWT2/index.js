import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import middleware from "./middleware.js";
import mongoose from "mongoose";
import User from "./Usermodel.js";
import {sendJwtToClient} from "./helpers/authorization/tokenHelpers.js";
import tokentest from "./controller/tokentest.js";

const tokenSifresi = process.env.JWT_SECRET_KEY;
const URI = process.env.DATABASE_URI;

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { username } = req.body;

  const token = jwt.sign({ username }, tokenSifresi);

  res.json(token);
});

app.post("/register", async (req, res) => {
  const { username, email } = req.body;

  const user = await User.create({
    username,
    email,
  });

  sendJwtToClient(user, res);
});

app.get("/tokentest",middleware,tokentest)

app.get("/check-token", (req, res) => {
  const result = jwt.verify(token, tokenSifresi);

  res.json({
    result: result,
  });
});


app.get("/degisiksayfa", (req, res) => {
  res.json({
    status: "sayfadayim",
  });
});

mongoose.connect(URI, () => {
  console.log("Database'e baglanildi...");
});

app.listen(3000, () => {
  console.log("Server calisiyor...");
});
