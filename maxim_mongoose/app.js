import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config'
import flightRouter from "./routes/flights.js"

const uri = `mongodb+srv://dbUser:${process.env['DB_PASSWORD']}@cluster0.wkita.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express()

app.use(express.json())

app.use('/', flightRouter)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async err => {
  console.log('Connected to DB')
});

/*
app.get('/flights', async (req, res) => {
  const collection = client.db("lufthansa").collection("flights");
  const allFlights = await collection.find().toArray()
  res.json(allFlights)
})

app.post('/addFlight', async (req, res) => {
  const collection = client.db("lufthansa").collection("flights");
  const result = await collection.insertOne(req.body)
  res.send(`data received ${result}`)
})
*/
app.listen(3008, () => {
  console.log('Backend started')
})

export { client }