module.exports = {
    checkPassword: (signinData, userFromDb) => ({
        username: signinData.username,
        success: signinData.password === userFromDb.password
    })
}
