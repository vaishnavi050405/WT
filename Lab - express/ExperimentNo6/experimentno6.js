const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    console.log('This is a middleware function',new Date())
    next()
})

app.get('/', (req, res) => {
  const date = new Date()

  res.json({
    CurrentTime: date,
    message: "Hello Home page"
  })
})

app.get('/about',(req,res) => {
    res.send('Hello About page')
})

app.get('/contact',(req,res) =>{
    res.send('Hello Contact page')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})