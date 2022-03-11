const mongoose = require("mongoose");
const Student = require("../Model/Students.js");
const Note = require("../Model/Notes.js");


const getStudents = async (req, res) => {

    const students = await Student.find().populate("note");

    res.json(students);
};

const addNewStudent = async (req, res) => {

    const newStudent = req.body;

    await Student.create(newStudent);

    res.json(newStudent);
};


module.exports = {getStudents,addNewStudent};