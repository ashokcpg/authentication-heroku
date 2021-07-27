const express = require("express");
const router = express.Router();

router.get("/show", (req, res) => {
	res.status("200").send("Inside Show User Route");
});
module.exports = router;
