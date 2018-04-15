module.exports = {
    checkPassword: (signinData, userFromDb) => ({
        username: signinData.username,
        success: true
    })
}
