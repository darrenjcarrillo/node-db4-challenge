const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  getShoppingList
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
  return (
    db("recipe_ingredients as ri")
      .select(
        "recipes.name",
        "ingredients.name"
        //  "q.quantities",
        //  "q.units"
      )
      .join("recipes", "recipes.id", "ri.recipe_id")
      // .join("quantity", "quantity.id", "i.quantity_id")
      .join("ingredients", "ingredients.id", "ri.ingredient_id")
      .where({ recipe_id })
  );

  // .first();
  // let query = db("recipe_ingredients");

  // if (id) {
  //   return query
  //     .where("id", id)
  //     .first()
  //     .then(ingredient => {
  //       if (ingredient) {
  //         return mappers.actionToBody(ingredient);
  //       } else {
  //         return ingredient;
  //       }
  //     });
  // }

  // return query.then(ingredient => {
  //   return actions.map(ingredient => mappers.actionToBody(ingredient));
  // });
}
