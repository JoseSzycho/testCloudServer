const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json(`Home page, origin: ${req.get('origin')}`);
});

app.get('/sayHello', (req, res) => {
  res.status(200).json('hola Valeria');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
