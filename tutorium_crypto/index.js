import express from "express";
import { encrypt, decrypt } from "./encyription.js";

const app = express();
app.use(express.json());

app.post("/encrypt", (req, res) => {
  const name = req.body.name;

  res.json({ "newMessage": encrypt(name) });
});

app.post("/decrypt", (req,res)=>{

    const newMessage = req.body.newMessage;

    const decryptedMessage = decrypt(newMessage);

    res.json({message:decryptedMessage});
})

app.listen(3008, () => {
  console.log("Server läuft...");
});
