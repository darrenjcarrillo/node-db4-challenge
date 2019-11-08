exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { name: "milk", quantity_id: 1 }, // 1
    { name: "fish", quantity_id: 2 }, // 2
    { name: "steak", quantity_id: 3 } // 3
  ]);
};
