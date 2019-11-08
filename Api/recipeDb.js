const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  getShoppingList,
  getInstructions
};

// get recipes
function get() {
  return db("recipes");
}

function getById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .select(
      "recipes.name",
      "ingredients.name",
      "quantity.quantities",
      "quantity.units"
    )
    .join("recipes", "recipes.id", "ri.recipe_id")
    .join("quantity", "quantity.id", "ri.quantity_id")
    .join("ingredients", "ingredients.id", "ri.ingredient_id")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions as i")
    .select("recipes.name", "i.step")
    .join("recipes", "recipes.id", "i.recipe_id")
    .where({ recipe_id });
}
