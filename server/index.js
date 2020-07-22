const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/Fill', (req, res) => {
  const year = req.query.year || '1';
  res.setHeader('Content-Type', 'application/json');
  filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit" 
  res.send(JSON.stringify({ data: filler }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);