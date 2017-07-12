const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js');

function isValidID(req, res, next) {
  if(!isNaN(req.params.id)) {
    return next();
  } else {
    next(new Error('Invalid ID'));
  }
};

function validBook(book) {
  const hasTitle = typeof book.title == 'string' && book.title.trim() != '';
  const hasCover = typeof book.cover == 'string' && book.cover.trim() != '';
  const hasDescription = typeof book.description == 'string' && book.description.trim() != '';
  const hasGenre = typeof book.genre == 'string' && book.genre.trim() != '';
  return hasTitle && hasCover && hasDescription && hasGenre;
};

router.get('/', (req, res) => {
  queries.getAll().then(books => {
    res.json(books);
  });
});

// router.get('/:id', isValidID, (req, res) => {
//   queries.getOne(req.params.id).then(book) => {
//     res.json(book);
//   };
// });
//
// router.post('/', (req, res, next) => {
//   if (validBook(req.body)) {
//     queries.create(req.body).then(books => {
//       res.json(books[0]);
//     })
//   } else {
//     next(new Error('Invalid Book'))
//   };
// });
//
// router.put('/:id', isValidID, (req, res, next) => {
//   if (validBook(req.body)) {
//     queries.update(req.params.id, req.body).then(books => {
//       res.json(books[0]);
//     });
//   } else {
//     next(new Error('Invalid Book'))
//   };
// });
//
// router.delete('/:id', isValidID, (req, res) => {
//   queries.delete(req.params.id).then(() => {
//     res.json({
//       deleted: true
//     });
//   });
// });

module.exports = router;
