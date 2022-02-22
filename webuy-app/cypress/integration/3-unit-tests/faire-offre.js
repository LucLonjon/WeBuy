describe('The Home Page', () => {
    

    it('doit créer une annonce pour user1', () => {
    
      cy.visit('/annonces')
      cy.contains('Faire une offre').click()
    })
  })