exports.seed = function(knex) {
  return knex("quantity").insert([
    { quantities: 1, units: "cup" }, // 1
    { quantities: 11, units: "kilogram" }, // 2
    { quantities: 2, units: "mile" } // 3
  ]);
};
