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
    <h1>You are not connected</h1>
  </body>
</html>`

app.post('/signin', (req, res) => {
  
  const postedSignin = req.body
  
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
  