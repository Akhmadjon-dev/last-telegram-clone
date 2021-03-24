const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
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

messageSchema.index({ createdAt: 1 });
const message = mongoose.model("Message", messageSchema);

module.exports = message;
