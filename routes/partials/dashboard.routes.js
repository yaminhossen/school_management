const express = require("express");
const router = express.Router();

// router.get("/dashboard", function (req, res) {
// 	console.log(req.session);
// 	return res.render("backend/dashboard");
// });

router.get("/dashboard/fghfgh", function (req, res) {
	// console.log(req.session);
	return res.render("backend/dashboard");
});

module.exports = () => router;
