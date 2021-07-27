const express = require("express");
const path = require("path");

const app = express();

app
	.route("/")
	.get((req, res) => {
		res.sendFile(path.resolve(__dirname + "/../views/home.html"));
	})
	.post((req, res) => {
		console.log(req.body.email, req.body.password);
	});

module.exports = app;
