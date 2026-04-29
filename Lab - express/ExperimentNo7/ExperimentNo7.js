const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
  const user = [
    { id: 1, name: 'Aditya' },
    { id: 2, name: 'Rohit' },
    { id: 3, name: 'Satyarth' },
  ];

  const id = parseInt(req.params.id);

  if (id > user.length || id < 1) {
    return res.status(404).send('User not found');
  }

  res.json(user[id - 1]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
