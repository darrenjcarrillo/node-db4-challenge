exports.up = function(knex) {
  return knex.schema
    .createTable("quantity", tbl => {
      // the type of the Primary Key is: integer without negative values, also called unsigned
      tbl.increments();
      tbl.float("quantities").notNullable();
      tbl.string("units", 255);
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      // define Foreign Key
      tbl
        .integer("quantity_id")
        .unsigned()
        .references("id")
        .inTable("quantity")
        .onDelete("RESTRICT") // about deleting the record from the primary key table. Could be 'RESTRICT', 'NO ACTION', 'SET NULL'
        .onUpdate("CASCADE"); // about changing the value of the primary key table.
    })
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.string("step", 255).notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl.string("from", 255);

      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("instruction_id")
        .unsigned()
        .references("id")
        .inTable("instructions")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("quantity");
};
