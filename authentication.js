module.exports = {
  checkPassword: (credentials, user) => ({
    success: credentials.password === user.password,
    username: user.username
  })
}
