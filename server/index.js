const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const port = 3000;

app.get('/api/reservations/:id', (req, res) => {
  const id = req.params.id;
  fetch(`http://localhost:3001/businesses/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => res.status(200).send(json));
});

app.get('/api/header/:id', (req, res) => {
  const id = req.params.id;
  fetch(`http://localhost:3004/business/${id}`)
    .then((res) => {
      return res.json();
    })
    .then(json => res.status(200).send(JSON.stringify(json)));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
