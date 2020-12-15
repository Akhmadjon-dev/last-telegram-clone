const Contacts = require("../models//contact");

exports.fetchAllContacts = (req, res) => {
  Contacts.find()
    .populate("friendId")
    .then((msg) => res.status(200).json(msg))
    .catch((err) => res.status(501).send(err));
};

exports.fetchContactById = (req, res) => {
  const { id } = req.params;

  Contacts.findById(id)
    .populate("friendId")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(501).send(err));
};

exports.createContact = async (req, res) => {
  const Contact = new Contacts({
    ...req.body,
    myId: req.session.userId,
  });

  Contact.save()
    .then((Contact) => {
      res.json(Contact);
    })
    .catch((err) => {
      res.json({ success: false, error: err.msg });
    });
};

exports.updateContactById = async (req, res) => {
  const { id } = req.params;
  const updatedData = { ...req.body, updatedAt: Date.now() };

  Contacts.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((Contact) => {
      res.status(200).json(Contact);
    })
    .catch((err) => res.status(501).send(err));
};
exports.deleteContactById = (req, res) => {
  const { id } = req.params;
  Contacts.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.status(501).send(err));
};
