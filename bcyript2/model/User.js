const mongoose = require("mongoose");
const {model,Schema} = require("mongoose");


const userSchema = ({

    userName :{
        type:String,
        required:true
    },

    password:{
        type:String,
        select:false
    }
})

const User = new model("user", userSchema);

module.exports = User;