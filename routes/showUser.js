const express = require("express");
const router = express.Router();
const app = express();

app
	.route("/")
	.get((req, res) => {
		res.status(200).send("<h2>Get Request to Show User</h2>");
	})
	.post((req, res) => {
		res.status(200).send("<h2>Post Request to Show Users,</h2>");
	});

// router.get("/", (req, res) => {
// 	res.status("200").send("<h2>Inside Show User Route</h2>");
// });

module.exports = app;
