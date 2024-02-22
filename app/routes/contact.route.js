const express = require("express");
const contacts = require("../controllers/contact.controller");

const reouter = express.Router();

router.route("/")
	.get(contacts.findAll)
	.post(contacts.create)
	.delete(contacts.deleteALL);

router.route("/favorite")
	.get(contacts.findALLFavorite);
	
router.route("?:id")
	.get(contacts.findOne)
	.put(contacts.update)
	.delete(contacts.delete);
	
module.exports = router;