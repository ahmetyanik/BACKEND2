const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  role: {
    type: String,
  },
  email:{
    type:String,
  },
  password:{
    type:String
  }
});

const User = model("kullanici", userSchema);

module.exports = User;