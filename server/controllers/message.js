const bcrypt = require("bcrypt");
const Messages = require("../models/message");
// const util = require('../utils');

// const baseUrl = process.env.REACT_APP_baseUrl || '';

exports.fetchAllMessages = (req, res) => {
  Messages.find()
    .then((msg) => res.status(200).json(msg))
    .catch((err) => res.status(501).send(err));
};

exports.fetchMessageById = (req, res) => {
  const { id } = req.params;

  Messages.findById(id)
    .then((msg) => {
      res.status(200).json(msg);
    })
    .catch((err) => res.status(501).send(err));
};

exports.updateMessageById = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body, updatedAt: Date.now() };

  Messages.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(501).send(err));
};


exports.deleteMessageById = (req, res) => {
  const { id } = req.params;
  Messages.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.status(501).send(err));
};
