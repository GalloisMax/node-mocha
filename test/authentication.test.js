const assert = require('chai').assert

const checkpassword = require('../authentication').checkPassword

describe('authentication module', () => {

    const validSigninData = {
        username: 'John',
        password: '1234'
    }

    const inValidSigninData = {
        username: 'John',
        password: '1234'
    }

    const existingUser = {
        username: 'John',
        password: '1234'
    }

    it('checkpassword should return an object', () => {
        assert.typeOf(checkpassword(validSigninData, existingUser), 'object')
    })
})