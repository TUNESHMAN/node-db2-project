exports.up = function (knex) {
  // The up function creates the fruits table
  return knex.schema.createTable("cars", (table) => {
    table.increments(); //Creates column named id. It is our primary key that auto-increments
    table.text("make", 250).notNullable();
    table.text("model").notNullable();
    table.integer("VIN").notNullable().unique();
    table.integer("mileage").notNullable().unique();
  });
};

exports.down = function (knex) {
  // The down function destroys the fruits table if it exists. It allows us to move to any state of the database.
  return knex.schema.dropTableIfExists("cars");
};

// VIN, make, model, and mileage.
