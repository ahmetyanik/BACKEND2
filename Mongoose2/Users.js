import mongoose from "mongoose";

const {model,Schema} = mongoose;

const userSchema = new Schema({

    name:{
        required:true,
        type:String
    },

    age:{
        type:Number
    },

    date:{
        type:Date,
        default:new Date()
    }

});

const User = model("kullanici", userSchema);

export default User;