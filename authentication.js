module.exports = {
  checkPassword: (credentials, user) => ({
    success: true,
    username: user.username
  })
}
