const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  img: String,
  name: String,
  password: {
    required: true,
    type: String,
  },
  phone: String,
});

userSchema.index({ email: 1 });
const user = mongoose.model("User", userSchema);

module.exports = user;
