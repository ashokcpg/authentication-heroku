const db = require("./dbconfig.js");
const express = require("express");
const app = express();
// Express middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importing Routes

const Register = require("./routes/Register.js");
const Login = require("./routes/Login.js");

// Connecting to the Database,
app.listen(process.env.PORT || 3000, async () => {
	db.select("*")
		.from("cred")
		.then((data) => {
			console.log("Connected to the Database,");
		})
		.catch((err) => {
			console.log("Failed to connect to the database," + err);
		});
	console.log(`Server running at port ${process.env.PORT || 3000}`);
});

// Setting Root View,
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

// Setting up the route handlers,
app.use("/register", Register);
app.use("/login", Login);
