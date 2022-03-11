
const express = require("express");
const { getStudents, addNewStudent } = require("../Controller/student.controller");
const router = express.Router();

router.get("/", getStudents);
router.post("/", addNewStudent);


module.exports = router;

