const express = require("express");
const router = express.Router();
const controllers = require("../controllers/contact");

/* GET home page. */
router.get("/", controllers.fetchAllContacts);
router.post("/", controllers.createContact);
router.get("/:id", controllers.fetchContactById);
router.post("/:id/edit", controllers.updateContactById);
router.get("/:id/delete", controllers.deleteContactById);

module.exports = router;
