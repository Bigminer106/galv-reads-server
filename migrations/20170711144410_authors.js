
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', table => {
    table.increments('id').primary();
    table.text('first').notNullable();
    table.text('last').notNullable();
    table.text('bio');
    table.text('portrait');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
