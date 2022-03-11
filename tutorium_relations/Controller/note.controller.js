const mongoose = require("mongoose");
const Note = require("../Model/Notes");


const getNotes = async (req, res) => {

    const notes = await Note.find();

    res.json(notes);
};

const addNewNote = async (req, res) => {

    const newNote = req.body;

    await Note.create(newNote);

    res.json(newNote);
};


module.exports = {getNotes,addNewNote};