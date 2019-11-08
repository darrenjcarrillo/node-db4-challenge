exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    {
      from: "Mom",
      recipe_id: 1,
      ingredient_id: 1,
      quantity_id: 1
    },
    {
      from: "Aunt Mary",
      recipe_id: 2,
      ingredient_id: 2,
      quantity_id: 2
    },
    {
      from: "TV",
      recipe_id: 3,
      ingredient_id: 3,
      quantity_id: 3
    }
  ]);
};
