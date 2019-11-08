const db = require("../data/db-config.js");

module.exports = {
  get,
  getById
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
