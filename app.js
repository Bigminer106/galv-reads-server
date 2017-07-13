const express = require('express');
const bodyParser = require('body-parser');
const books = require('./routes/book-routes.js');
const authors = require('./routes/author-routes.js');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/books', books);
app.use('/api/v1/authors', authors);
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
});

app.listen(port, () => {
  console.log(`Listening at Port ${port}!`)
});

module.exports = app;
