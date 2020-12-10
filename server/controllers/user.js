const bcrypt = require("bcrypt");
const Users = require("../models/user");
// const util = require('../utils');

// const baseUrl = process.env.REACT_APP_baseUrl || '';

exports.fetchAllUsers = (req, res) => {
  Users.find()
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(501).send(err));
};

exports.fetchUserById = (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => res.status(501).send(err));
};

exports.deleteAllUsers = (req, res) => {
  Users.deleteMany()
    .then(() => res.status(200).json("Deleted"))
    .catch((err) => res.status(501).send(err));
};

// exports.createUser = async (req, res) => {
//   const {
//     webCam, name, createdAt, password, email, file
//   } = req.body;
//   let imgFile = null;

//   if (webCam) {
//     imgFile = await util.webImgtoFile(webCam, 'admins', `${name}-${createdAt}`);
//   }

//   const img = file ? baseUrl + file.path.replace('public', '') : (imgFile || webCam);
//   const hashedPassword = await bcrypt.hash(password, 8);
//   const Admin = new Admins({
//     ...req.body, img, password: hashedPassword,
//   });

//   Admin
//     .save()
//     .then((admin) => {
//       res.json(admin);
//       util.resizeImg(file, 'admins');
//     })
//     .catch((err) => {
//       const msg = err.code === 11000 ? `Users with "${email}" email adress exists` : err.errmsg;
//       res.json({ success: false, msg });
//     });
// };

exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  //   const { webCam, oldImg, updatedAt, name, } = req.body;
  const { oldImg, updatedAt } = req.body;

  //   let imgFile = null;

  //   if (webCam) {
  //     imgFile = await util.webImgtoFile(webCam, 'admins', `${name}-${updatedAt}`, true, oldImg);
  //   }

  //   const img = req.file ? baseUrl + req.file.path.replace('public', '') : (imgFile || webCam || oldImg);

  const updatedData = { ...req.body };

  Users.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((user) => {
      res.status(200).json(user);
      //   util.resizeImg(req.file, 'admins');
    })
    .catch((err) => res.status(501).send(err));
};

exports.changeUserAuth = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  console.log(req.body);

  const hash = await bcrypt.hash(password, 8);
  Users.find({ email })
    .then((user) => {
      console.log(user);

      if ((user.length && user[0]._id == id) || !user.length) {
        console.log("Success");

        Users.findByIdAndUpdate(
          id,
          { $set: { email, password: hash } },
          { new: true }
        )
          .then(() => res.status(200).json({ success: true }))
          .catch((err) =>
            res.status(501).json({ success: false, msg: err.message })
          );
      } else if (user.length && user[0]._id != id) {
        res.json({
          success: false,
          msg: `You can't use the email. Another user has been registered with '${email}'`,
        });
      }
    })
    .catch((err) => res.json({ success: false, msg: err.message }));
};

exports.deleteUserById = (req, res) => {
  const { id } = req.params;
  Users.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.status(501).send(err));
};
