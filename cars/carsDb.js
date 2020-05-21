// Bring in the db
const db = require("../data/db-config");

module.exports = {
  getCar,
  getCarById,
  //   updateCar,
  //   deleteCar,
  //   addCar,
};

// Helper function for retrieving all cars
function getCar() {
  // This is the equivalent of SELECT * FROM cars
  return db("cars");
}

// Helper function to get a particular car by its id
function getCarById(id) {
  return db("cars").where({ id }).first();
}
