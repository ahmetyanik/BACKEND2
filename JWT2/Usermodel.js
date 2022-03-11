import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const {model,Schema} = mongoose;

const userSchema = new Schema({

    username:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    }


});

userSchema.methods.generateJwtFromUser = function(){

    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;

    const payload = {
        id:this._id,
        name:this.name
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY,{expiresIn:JWT_EXPIRE});

    return token;
}

const User = model("kullanici", userSchema);

export default User;