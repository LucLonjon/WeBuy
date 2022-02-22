describe('The Home Page', () => {
    
    beforeEach(() => {
    
        if (!cy.request('GET', 'http://localhost:8080/users/user1' )) {
            cy.request('POST', 'http://localhost:8080/users/register', {prenom:"user1",nom:"user1",mail:"user1@gmail.com",username:"user1",password:"123456",adresse:"test"})
        }
        
      })

    it('doit créer une annonce pour user1', () => {
      
      cy.request({method : 'POST', 
      url : 'http://localhost:8080/annonces/create',
      auth: {
        bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTY0NTUyNDkwNCwiZXhwIjoxNjQ2MTI5NzA0fQ.-znQukpFcfJe2sQz507jJEmfjPZlThmIndG324tdJPw'
      }, 
      body : {
        titre: "Voiture",
        description: "PORSCHE 3",
        prix_vente: 20000,
        id_username: "testluc",
        photo: "url",
        state: "1",
        id_categorie: 1
}})
      cy.visit('/annonces')
    })
  })