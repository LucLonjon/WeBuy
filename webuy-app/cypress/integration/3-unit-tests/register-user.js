describe('The Home Page', () => {

    beforeEach(() => {
    
        if (cy.request('GET', 'http://localhost:8080/users/user1' )) {
            cy.request('DELETE', 'http://localhost:8080/users/user1')
        }
        
      })
    
    it('successfully loads', () => {

      cy.request('POST', 'http://localhost:8080/users/register', {prenom:"user1",nom:"user1",mail:"user1@gmail.com",username:"user1",password:"123456",adresse:"test"})
      cy.visit('/')
    })
  })