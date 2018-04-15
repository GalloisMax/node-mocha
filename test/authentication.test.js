const assert = require('chai').assert

const checkpassword = require('../authentication').checkPassword

describe('authentication module', () => {

    const validSigninData = {
        username: 'John',
        password: '1234'
    }

    const inValidSigninData = {
        username: 'John',
        password: '4321'
    }

    const existingUser = {
        username: 'John',
        password: '1234'
    }

    it('checkpassword should return an object', () => {
        assert.typeOf(checkpassword(validSigninData, existingUser), 'object')
    })

    it('checkpassword should username and success true if password is valid', () => {
        assert.deepEqual(checkpassword(validSigninData, existingUser), {
            username: existingUser.username,
            success: true
        })
    })

    it('checkpassword should username and success false if password is invalid', () => {
        assert.deepEqual(checkpassword(inValidSigninData, existingUser), {
            username: existingUser.username,
            success: false
        })
    })
})