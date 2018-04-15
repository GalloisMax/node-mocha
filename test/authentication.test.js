const assert = require('chai').assert 

const checkPassword = require('../authentication').checkPassword

describe('authentication module', () => {
  
  describe('checkpassword', () => {

    const validCredentials = { 
      username: 'John', 
      password: '1234' 
    } 

    const inValidCredentials = { 
        username: 'John', 
        password: '4321' 
    } 

    const existingUser = { 
        username: 'John', 
        password: '1234' 
    }

    const successResponse = {
      success: true,
      username: 'John'
    }

    const errorResponse = {
      success: false,
      username: 'John'
    }

    it('should return an object', () => {
      const result = checkPassword(validCredentials, existingUser)
      assert.typeOf(result, 'object')
    })

    it('should return success reponse if credentials password match user password', () => {
      const result = checkPassword(validCredentials, existingUser)
      assert.deepEqual(result, successResponse)
    })

    it('should return error reponse if credentials password does not match user password', () => {
      const result = checkPassword(inValidCredentials, existingUser)
      assert.deepEqual(result, errorResponse)
    })

  })
})
