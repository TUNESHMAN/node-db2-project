// Bring in express
const express = require("express");

// Bring in the helper functions from carsDb.js
const car = require("../cars/carsDb");

// Import the router
const router = express.Router();

// The cars endpoints below
router.get("/", (req, res) => {
  res.json({ message: `Hello` });
});

// I exported the router to be seen on the server
module.exports = router;
