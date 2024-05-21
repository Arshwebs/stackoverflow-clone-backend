const express = require("express");
const router = express.Router();
const {login} = require("../controller/userController");
const {roleAdmin, validate} = require("../auth");

let check = (req, res) => {
	res.send("ok");
	console.log("Arsath");
};

router.route("/login").get(login).post(validate, roleAdmin, check);

module.exports = router;
