const db = require("./dbconfig.js");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Register = require("./routes/Register.js");
const Login = require("./routes/Login.js");

app.listen(process.env.PORT || 3000, async () => {
	db.select("*")
		.from("cred")
		.then((data) => {
			console.log("Connected to the Database,");
		})
		.catch((err) => {
			console.log("Failed to connect to the database," + err);
		});
	console.log("Server running at port 3000");
});

// Setting endpoints
app.use(express.json());
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.use("/register", Register);
app.use("/login", Login);
