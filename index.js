const db = require("./dbconfig.js");
const express = require("express");
const app = express();

const showUsers = require("./routes/showUser.js");
const addUsers = require("./routes/addUser.js");

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
	res.status(200).send("<h1>Welcome Home... </h1>");
});
app.use("/show", showUsers);
app.use("/add", addUsers);
