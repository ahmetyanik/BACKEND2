const mongoose = require("mongoose");
const {model,Schema} = mongoose;

const userSchema = new Schema({

    name:{
        required:true,
        type:String
    },

    age:{
        required:false,
        type:Number
    },

    date:{

        type:Date,
        default:new Date
        
    }
})


const User = model("user",userSchema);

module.exports =  User;