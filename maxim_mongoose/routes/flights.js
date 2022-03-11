import { Router } from "express";
import { getFlights, createFlight } from "../controller/flightsController.js";

const router = new Router()

router.get('/flights', getFlights)

router.post('/addFlight', createFlight)

export default router