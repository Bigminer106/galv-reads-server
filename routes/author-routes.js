const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidID(req, res, next) {
  if(!isNaN(req.params.id)) {
    return next();
  } else {
    next(new Error('Invalid ID'));
  }
};

function validAuthor(author) {
  const hasFirst = typeof author.first == 'string' && author.first.trim() != '';
  const hasLast = typeof author.last == 'string' && author.last.trim() != '';
  const hasPortrait = typeof author.portrait == 'string' && author.portrait.trim() != '';
  const hasBio = typeof author.bio == 'string' && author.bio.trim() != '';
  return hasFirst && hasPortrait && hasBio && hasLast;
};

router.get('/', (req, res) => {
  queries.getAll().then(authors => {
    res.json(authors);
  });
});

router.get('/:id', isValidID, (req, res) => {
  queries.getOne(req.params.id).then(author) => {
    res.json(author);
  };
});

router.post('/', (req, res, next) => {
  if (validAuthor(req.body)) {
    queries.create(req.body).then(authors => {
      res.json(authors[0]);
    })
  } else {
    next(new Error('Invalid Author'))
  };
});

router.put('/:id', isValidID, (req, res, next) => {
  if (validAuthor(req.body)) {
    queries.update(req.params.id, req.body).then(authors => {
      res.json(authors[0]);
    });
  } else {
    next(new Error('Invalid Author'))
  };
});

router.delete('/:id', isValidID, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});
