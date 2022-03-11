import express from "express";
import { addRecord, getRecords, showById, showFour } from "./controllers/records.controller.js";
import cors from "cors";

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


const port = 3005;

const app = express();
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json());

app.get("/records",getRecords );

app.post("/records",addRecord);

app.get("/records/top4",showFour);

app.get("/records/:id",showById);

app.listen(port, () => {
  console.log(port + " arbeitet...");
});
