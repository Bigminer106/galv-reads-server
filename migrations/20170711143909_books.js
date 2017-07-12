
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table => {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('genre').notNullable();
    table.text('description').notNullable();
    table.text('cover').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
