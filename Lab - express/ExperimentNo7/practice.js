const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    console.log('This is a middleware function');
    
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

