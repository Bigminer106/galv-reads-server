const knex = require('./knex');

module.exports = {
  {
    getAll() {
      return knex('books')
    }
  },
  {
    getAll() {
      return knex('authors');
    }
  },
  {
    getOne(id) {
      return knex('books').where('id', id).first();
    }
  },
  {
    getOne(id) {
      return knex('authors').where('id', id).first();
    }
  },
  {
    create(book) {
      return knex('books').insert(book, '*');
    }
  },
  {
    create(author) {
      return knex('authors').insert(author, '*');
    }
  },
  {
    update(id, book) {
      return knex('books').where('id', id).update(book);
    }
  },
  {
    update(id, author) {
      return knex('authors').where('id', id).update(author);
    }
  },
  {
    delete(id) {
      return knex('books').where('id', id).del();
    }
  },
  {
    delete(id) {
      return knex('authors').where('id', id).del();
    }
  }
};
