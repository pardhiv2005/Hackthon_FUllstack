const express = require("express");
const router = express.Router();
const { getWeather } = require("../controllers/weatherController");
const authenticateToken = require("../middleware/authMiddleware");

router.get("/:city", authenticateToken, getWeather);

module.exports = router;
