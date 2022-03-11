const mongoose = require("mongoose");
const {model,Schema} = mongoose;


const notesSchema = new Schema({

    math:{
        required:true,
        type:Number
    },
    music:{
        required:true,
        type:Number
    },
    history:{
        required:true,
        type:Number
    },
    chemistry:{
        required:true,
        type:Number
    },

});

const Note = model("note", notesSchema);

module.exports = Note;