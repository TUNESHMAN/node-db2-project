// Bring in the db
const db = require("../data/db-config");

module.exports = {
  getCar,
//   getCarById,
//   updateCar,
//   deleteCar,
//   addCar,
};

function getCar() {
  // This is the equivalent of SELECT * FROM cars
  return db("cars");
}
