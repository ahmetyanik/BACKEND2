import { client } from '../app.js'

async function getFlights(req, res) {
  const collection = client.db("lufthansa").collection("flights");
  const allFlights = await collection.find().toArray()
  res.json(allFlights)
}

async function createFlight(req, res) {
  const collection = client.db("lufthansa").collection("flights");
  const result = await collection.insertOne(req.body)
  res.send(`data received ${result}`)
}

export {getFlights, createFlight}