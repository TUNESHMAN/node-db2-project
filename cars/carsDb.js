// Bring in the db
const db = require("../data/db-config");

module.exports = {
  getCar,
  getCarById,
  updateCar,
  deleteCar,
  addCar,
};

// Helper function for retrieving all cars
function getCar() {
  // This is the equivalent of SELECT * FROM cars
  return db("cars");
}

// Helper function to get a particular car by its id
function getCarById(id) {
  // This is the equivalent of SELECT * FROM cars WHERE id=id;
  return db("cars").where({ id }).first();
}

// Helper function to edit a car
function updateCar({ id, make, model, VIN, mileage }) {
  return db("cars").where({ id }).update({ make, model, VIN, mileage });
}

// Helper function to delete a car
function deleteCar(id) {
  return db("cars").where({ id }).del();
}
// Helper function to add a car
function addCar({ make, model, VIN, mileage }) {
  return db("cars").insert({
    make: make,
    model: model,
    VIN: VIN,
    mileage: mileage,
  });
}
