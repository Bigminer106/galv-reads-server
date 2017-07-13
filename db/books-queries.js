const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('books')
  },
  getOne(id) {
    return knex('books').where('id', id).first();
  },
  create(book) {
    return knex('books').insert(book, '*');
  },
  update(id, book) {
    return knex('books').where('id', id).update(book);
  },
  delete(id) {
    return knex('books').where('id', id).del();
  }
};
