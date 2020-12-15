const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  myId: { type: Schema.Types.ObjectId },
  friendId: { type: Schema.Types.ObjectId },
  status: String,
  createdAt: { default: Date.now(), type: Number },
  updatedAt: {
    default: Date.now(),
    type: Number,
  }, 
});

const contact = mongoose.model("Contact", contactSchema);

module.exports = contact;
