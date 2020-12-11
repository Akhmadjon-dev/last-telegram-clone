const express = require("express");
const router = express.Router();
const controllers = require("../controllers/message");

/* GET home page. */
router.get("/", controllers.fetchAllMessages);
router.post("/", controllers.createMessage);
router.get("/:id", controllers.fetchMessageById);
router.post("/:id/edit", controllers.updateMessageById);
router.delete("/:id/delete", controllers.deleteMessageById);

module.exports = router;
