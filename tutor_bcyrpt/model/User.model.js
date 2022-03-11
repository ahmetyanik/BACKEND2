const mongoose = require("mongoose");

const {model,Schema} = mongoose;


const UserSchema = new Schema({

    username :{
        type:String,
    },

    password:{
        type:String
    }

})


const User = new model("user",UserSchema);

module.exports = User;


