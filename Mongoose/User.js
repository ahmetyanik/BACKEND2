import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },

  age: {
    required: false,
    type: Number,
  },

  date: {
    type: Date,
    default: new Date(),
  },
});

const User = model("user", userSchema);

export default User;
