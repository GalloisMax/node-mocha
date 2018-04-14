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
    <h1>You are not connected</h1>
  </body>
</html>`


app.get('*', (req, res) => {
    res.send(html)
    res.end()
  })
  
  app.listen(8000)
  