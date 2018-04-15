const express = require('express')

const app = express()

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



app.get('*', (req, res) => {
  res.send(html)
  res.end()
})
  
app.listen(8000)
