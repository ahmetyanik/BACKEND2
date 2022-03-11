const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("@hapi/joi")

const UserSchema = new Schema({

    isim:{
        type:String,
        require:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlength:50,
        lowercase:true
    }
    ,
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    }
    ,
    sifre:{
        type:String,
        required:true,
        trim:true
    }
})

UserSchema.methods.joiValidation = function(userObject){

    const schema = Joi.object({
        isim:Joi.string().min(3).max(50).trim().required(),
        userName:Joi.string().min(3).max(50).trim().required(),
        email:Joi.string().email().required(),
        sifre:Joi.string().trim().required()
    })

    return schema.validate(userObject);
}
const User = mongoose.model("User", UserSchema, "kullanicilar");


module.exports = User;