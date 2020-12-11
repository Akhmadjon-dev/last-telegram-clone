const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user");
const multer = require("../configs/multer.js");

/* GET home page. */
router.get("/", controllers.fetchAllUsers);
// router.post("/", multer.single("img"), controllers.createUser);
router.get("/:id", controllers.fetchUserById);
router.post("/:id/edit", multer.single("img"), controllers.updateUserById);
router.delete("/:id/delete", controllers.deleteUserById);
router.post("/:id/change-auth", controllers.changeUserAuth);

module.exports = router;
