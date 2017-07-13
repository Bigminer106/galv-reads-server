const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('authors');
  },
  getOne(id) {
    return knex('authors').where('id', id).first();
  },
  create(author) {
    return knex('authors').insert(author, '*');
  },
  update(id, author) {
    return knex('authors').where('id', id).update(author);
  },
  delete(id) {
    return knex('authors').where('id', id).del();
  }
}
