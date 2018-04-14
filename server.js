const express = require('express')
const bodyParser = require('body-parser')

const checkPassword = require('./authentication').checkPassword

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

// function mocking getting a user by his usernae from the database
getUserFromDb = username => Promise.resolve({
  password: 'wildcode',
  username
})

app.post('/signin', (req, res) => {
  
  const postedSignin = req.body
  
  getUserFromDb(postedSignin.username)
  .then(userFromDb => {
    const result = checkPassword(postedSignin, userFromDb)
    res.json({
      success: true,
      username: 'JoeWild'
    })
  })
})

app.get('*', (req, res) => {
    res.send(html)
    res.end()
  })
  
app.listen(8000)
  