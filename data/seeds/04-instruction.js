exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      recipe_id: 1,
      step: "Step: Heat up your carne asada , put salsa and onions "
    }, // 1
    { recipe_id: 2, step: "Step: Bake the fish, put water, and boil it" }, // 2
    {
      recipe_id: 3,
      step: "Step: Marinate it with soy sauce, put it on pan, stir until ready"
    } // 3
  ]);
};
