const express = require('express')
const bodyParser = require('body-parser') 

const app = express()
app.use(bodyParser.json()) 

const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Mocha - test</title>
  </head>
  <body>
    <h1>Welcome to the world of test</h1>
    <p>post user credentials (login / password) on the signin route</p>
  </body>
</html>`

app.post('/signin', (req, res) => { 
   
  const credentials = req.body 
  
  res.json({ 
    success: true, 
    userName: 'JoeWild' 
  }) 
}) 

app.get('*', (req, res) => {
  res.send(html)
  res.end()
})
  
app.listen(8000)
