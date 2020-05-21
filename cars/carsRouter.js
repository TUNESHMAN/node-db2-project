// Bring in express
const express = require("express");

// Bring in the helper functions from carsDb.js
const car = require("../cars/carsDb");

// Import the router
const router = express.Router();

// The cars endpoints below

// Endpoint to get all cars
router.get("/", (req, res) => {
  car
    .getCar()
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Error retrieving car details`, stack: error.stack });
    });
});

// I exported the router to be seen on the server
module.exports = router;
