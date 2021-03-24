const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  bio: String,
  img: String,
  firstName: String,
  lastName: String,
  userName: String,
  password: {
    required: true,
    type: String,
  },
  status: String,
  phone: String,
  createdAt: {
    default: Date.now(),
    type: Number,
  },
  updatedAt: {
    default: Date.now(),
    type: Number,
  },
});

userSchema.index({ email: 1 });
const user = mongoose.model("User", userSchema);

module.exports = user;
