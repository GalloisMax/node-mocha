module.exports = {
    checkPassword: (signinData, userFromDb) => ({
        username: signinData.username,
        success: signinData.password === signinData.password
    })
}
