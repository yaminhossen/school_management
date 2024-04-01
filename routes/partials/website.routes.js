const express = require("express");
const { share_check_auth } = require("../..");
const router = express.Router();
let server = null;



module.exports = (mainserver) => {
	router
		.get("/", function (req, res) {
			return res.render("frontend/home");
		})
		.get("/login", function (req, res) {
			return res.render("auth/login");
		})
		.get("/home", function (req, res) {
			return res.render("frontend/home");
		})
		.get("/dashboard", function (req, res) {
			return res.render("backend/super_admin/dashboard");
		})
	// 	.get("/about", website_controller.about)
	
	return router
};