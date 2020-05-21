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

// Endpoint to get a car by its id
router.get("/:id", validateCarId, (req, res) => {});

// Middleware for validating a car by id
function validateCarId(req, res, next) {
  const { id } = req.params; //The id comes from req.params
  // The id may exist or not
  car
    .getCarById(id)
    .then((car) => {
      if (car) {
        console.log(car);

        res.status(200).json(car);
      } else if (!car) {
        res
          .status(404)
          .json({ message: `The car with the id ${id} does not exist` });
      } else {
        next();
      }
    })
    .catch((error) => {
      console.log(c);

      res.status(500).json({ message: error.message, stack: error.stack });
    });
}

// I exported the router to be seen on the server
module.exports = router;
