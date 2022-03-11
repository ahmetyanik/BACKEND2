const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const Note = require("./Notes");

const studentSchema = new Schema({

    studentName:{
        required:true,
        type:String
    },

    age:{
        required:true,
        type:Number
    },

    note:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "note"
    }],

    resgisteredAt:{
        default:new Date,
        type: Date
    }

});

const Student = model("student", studentSchema);

module.exports = Student;