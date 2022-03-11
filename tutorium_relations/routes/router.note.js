const express = require("express");
const { getNotes, addNewNote } = require("../Controller/note.controller");
const router = express.Router();

router.get("/", getNotes);
router.post("/", addNewNote);


module.exports = router;
