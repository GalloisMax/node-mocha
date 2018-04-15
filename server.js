const express = require('express')
const bodyParser = require('body-parser') 
const checkPassword = require('./authentication').checkPassword

const app = express()
app.use(bodyParser.json()) 

// function mocking getting a user by his username from the database 
getUserFromDb = username => Promise.resolve({ 
  password: 'wildcode', 
  username
})

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
  
  getUserFromDb(credentials.username)
  .then(userFromDb => {
    
    //check credentials.password vs userFromDb.password
    const reponse = checkPassword(credentials, userFromDb)
    
    res.json(reponse) 
  })

}) 

app.get('*', (req, res) => {
  res.send(html)
  res.end()
})
  
app.listen(8000)
