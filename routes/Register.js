const { urlencoded } = require("express");
const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");

app
	.route("/")
	.get((req, res) => {
		// res.status(200).json({ info: "Register Page..." });
		res.sendFile(path.resolve(__dirname + "/../views/register.html"));
	})
	.post((req, res) => {
		console.log(req.body.name, req.body.email, req.body.password);
	});

// router.get("/", (req, res) => {
// 	res.status("200").send("<h2>Inside Show User Route</h2>");
// });

module.exports = app;
