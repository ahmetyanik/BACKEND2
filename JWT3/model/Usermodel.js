const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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

userSchema.methods.generateToken = async function () {
  const { JWT_SECRET_KEY } = process.env;

  const payload = {
    id: this._id,
    name: this.name,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY);

  return token;
};

const User = model("kullanici", userSchema);
module.exports = User;
