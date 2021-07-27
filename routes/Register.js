const { urlencoded } = require("express");
const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const db = require("../dbconfig");

app
	.route("/")
	.get((req, res) => {
		// res.status(200).json({ info: "Register Page..." });
		res.sendFile(path.resolve(__dirname + "/../views/register.html"));
	})
	.post((req, res) => {
		// checking if data exists,
		db.select("email")
			.from("cred")
			.where("email", req.body.email)
			.then((list) => {
				if (list.length) {
					res.status(200).json("Error in Creating Account.");
				} else {
					const id = uuidv4();
					const hashedPassword = bcrypt.hashSync(req.body.password, 10);
					db.transaction((trx) => {
						trx
							.insert({
								uuid: id,
								email: req.body.email,
								password: hashedPassword,
							})
							.into("cred")
							.then((info) => {
								return trx("cred")
									.returning("*")
									.where("email", "=", req.body.email)
									.then((user) => {
										res.json(user[0].email);
										console.log("Successfully Registered.");
									})
									.catch((err) => {
										console.log("OPPS, ERROR" + err);
									})
									.then(trx.commit)
									.catch((err) => {
										trx.rollback;
										res.status(400).json("Unable to Register," + err.detail);
									});
							});
					}).catch((err) => {
						res.status(400).json("Unable to Register 2," + err.detail);
					});
				}
			});
	});

// Alternative way

// router.get("/", (req, res) => {
// 	res.status("200").send("<h2>Inside Show User Route</h2>");
// });

module.exports = app;
