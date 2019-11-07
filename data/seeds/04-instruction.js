exports.seed = function(knex) {
  return knex("instructions").insert([
    { step: "Step: Heat up your carne asada , put salsa and onions " }, // 1
    { step: "Step: Bake the fish, put water, and boil it" }, // 2
    {
      step: "Step: Marinate it with soy sauce, put it on pan, stir until ready"
    } // 3
  ]);
};
