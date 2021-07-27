const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.status("200").send("<h2>Inside Add User Route</h2>");
});

module.exports = router;
