const { Http2ServerResponse } = require("http2")

describe('The Home Page', () => {

    beforeEach(() => {
    
        if (!cy.request('GET', 'http://localhost:8080/users/user1' )) {
            cy.request('POST', 'http://localhost:8080/users/register', {prenom:"user1",nom:"user1",mail:"user1@gmail.com",username:"user1",password:"123456",adresse:"test"})
        }
        
      })
    
    it('successfully log the user in', () => {
      cy.request('POST', 'http://localhost:8080/users/authenticate', {username:"user1",password:"123456"})
      cy.visit('/')
    })
  })