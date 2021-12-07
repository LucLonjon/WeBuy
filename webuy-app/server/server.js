const express = require('express');
const app = express()
const port = 8080
const cors = require('cors');
const Promise = require('sequelize').Promise;


const getAnnounceSaleRqt = require('./Rqt/getAnnounceSaleRqt');
const postAnnounceSaleRqt = require('./Rqt/postAnnounceSaleRqt');


app.use(express.json())
app.use(cors())
app.use('/users', require('./users/users.controller'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  app.get('/api/annoncesales/:id', (req, res) => {
  const id = req.params.id;
  getAnnounceSaleRqt.getAnnonceSales(id,(resultat, err) => {
      res.json(resultat);
  });
});

  app.get('/annonce/:titre', (req, res) => {
  const titre = req.params.titre;
  getAnnounceSaleRqt.getAnnoncebyTitle(titre,(resultat, err) => {
      res.json(resultat);
  });
});

  app.get('/annonces', (req, res) => {
  const titre = req.params.titre;
  getAnnounceSaleRqt.getAllAnnounce((resultat, err) => {
        res.json(resultat);
    });
});

  app.post('/annonces/create', function (request, response) {
    console.log(request.body.titre, request.body.description, request.body.prix_vente, request.body.id_username,
      request.body.photo,request.body.state,request.body.id_categorie);
    postAnnounceSaleRqt.postAnnonceSales(request.body.titre, request.body.description, request.body.prix_vente, request.body.id_username,
    request.body.photo,request.body.state,request.body.id_categorie,(result, err) => {
      if (err) throw err;
        //res.json(result);
    });
  });