const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
