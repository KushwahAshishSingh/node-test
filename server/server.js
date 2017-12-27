const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page nt found',
    name: 'ashish'
  });
});


app.get('/users', (req, res) => {
  res.send([ {
    name: 'Mike',
    age: 27 },
    { name: 'ashish', age: 24 }
  ]);
});

app.listen(8080);
module.exports.app = app;
