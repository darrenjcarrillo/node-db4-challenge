exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Tacos" }, // 1
    { name: "Sinigang" }, //2
    { name: "Pad Thai" } //3
  ]);
};
