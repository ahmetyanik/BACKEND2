import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));

const uri = `mongodb+srv://ahmet:${process.env["DB_PASSWORD"]}@cluster0.qk2zb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect(async (err) => {
  console.log("Connected to DB");
});

app.use(express.json());


app.get('/', async (req, res) => {
    
    const collection = client.db("deneme").collection("yazilar");

    const allYazilar = await collection.find().toArray()
    res.json(allYazilar)
  })


app.post('/yaziekle', async (req, res) => {
    const collection = client.db("deneme").collection("yazilar");


    const result = await collection.insertOne(req.body)


    res.send(`data received ${result}`)
  })



app.listen(3003, () => {
  console.log("Backend started");
});
