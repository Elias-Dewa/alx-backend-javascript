const express = require('express');

const app = express();

const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port);

module.exports = app;