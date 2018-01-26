const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/', (req, res) => {
  res.status(200).json();
});

app.get('/testing', (req, res) => {
  res.status(200);
  res.send('GET request to testing');
});

app.listen(3001, () => {
  console.log('Listening on port 3000!');
});

module.exports = app;
