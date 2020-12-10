const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  myId: { type: Schema.Types.ObjectId },
  friendId: { type: Schema.Types.ObjectId },
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
