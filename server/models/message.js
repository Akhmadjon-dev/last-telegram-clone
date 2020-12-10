const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  text: String,
  toId: { type: Schema.Types.ObjectId },
  fromId: { type: Schema.Types.ObjectId },
  status: String,
  createdAt: { default: Date.now(), type: Number },
  updatedAt: {
    default: Date.now(),
    type: Number,
  },
});

userSchema.index({ email: 1 });
const user = mongoose.model("User", userSchema);

module.exports = user;
