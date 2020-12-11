const Messages = require("../models/message");

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

exports.createMessage = async (req, res) => {
  const Message = new Messages({
    ...req.body,
    fromId: req.session.userId,
  });

  Message.save()
    .then((msg) => {
      res.json(msg);
    })
    .catch((err) => {
      res.json({ success: false, error: err.msg });
    });
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
