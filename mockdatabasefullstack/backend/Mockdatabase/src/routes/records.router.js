import { Router } from "express";
import {
  getRecords,
  addRecord,
  showFour,
  controlNewRecord,
  showById,
} from "../controllers/records.controller.js";

const router = new Router();

router.route("/records").get(getRecords).post(controlNewRecord,addRecord);

router.route("/records/top4").get(showFour);

router.route("/records/:id").get(showById);

export default router;
