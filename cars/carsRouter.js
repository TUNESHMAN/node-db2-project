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

// Endpoint to update cars
router.put("/:id", (req, res) => {
  const replacementCar = req.body;
  const { id } = req.params;
  car
    .updateCar({
      id,
      make: replacementCar.make,
      model: replacementCar.model,
      VIN: replacementCar.VIN,
      mileage: replacementCar.mileage,
    })
    .then((car) => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({
          message: `The car ${id} does not exist. Hence update could not be done`,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Endpoint to delete a car
router.delete("/:id", (req, res) => {
  // It needs an Id
  const { id } = req.params;
  car
    .deleteCar(id)
    .then((car) => {
      if (car) {
        res
          .status(200)
          .json({ message: `The car with id ${id} has been deleted` });
      } else {
        res
          .status(404)
          .json({ message: `The car with id ${id} does not exist` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Endpoint to post a car
router.post("/", validateCar, (req, res) => {
  const newCar = req.body;
  car
    .addCar(newCar)
    .then((car) => {
      res.status(200).json({ message: `Car added successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Middleware for checking a car's details
function validateCar(req, res, next) {
  const newCar = req.body;
  if (Object.keys(newCar).length < 1) {
    res.status(400).json({ message: `Please enter a new car` });
  } else if (!newCar.make || !newCar.VIN || !newCar.model || !newCar.mileage) {
    res.status(400).json({ message: `Please enter all relevant fields` });
  }
  next();
}

// Middleware for validating a car by id
function validateCarId(req, res, next) {
  const { id } = req.params; //The id comes from req.params
  // The id may exist or not
  car
    .getCarById(id)
    .then((car) => {
      if (car) {
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
      res.status(500).json({ message: error.message, stack: error.stack });
    });
}

// I exported the router to be seen on the server
module.exports = router;
