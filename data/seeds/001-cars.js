exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { make: "Toyota", model: "Camry", VIN: 64646, mileage: 64445 },
        { make: "Honda", model: "Accord", VIN: 8516454, mileage: 646578 },
        { make: "Mercedes", model: "E-classic", VIN: 6786759, mileage: 874335 },
      ]);
    });
};
