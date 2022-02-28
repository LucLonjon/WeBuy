const express = require('express');
const app = express()
const port = 8080
const cors = require('cors');
const Promise = require('sequelize').Promise;

const authorize = require('./_middleware/authorize')
const getAnnounceSaleRqt = require('./Rqt/getAnnounceSaleRqt');
const postAnnounceSaleRqt = require('./Rqt/postAnnounceSaleRqt');
const postOfferRqt = require('./Rqt/postOfferRqt');
const getOfferRqt = require('./Rqt/getBuyerOfferRqt');

app.use(express.json())
app.use(cors())
app.use('/users', require('./users/users.controller'));
//app.use('/annonces', authorize());
app.use('/annonces/create',authorize());
app.use('/annonces/delete',authorize());


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



  app.get('/api/annoncesales/:id', (req, res) => {
  const id = req.params.id;
  getAnnounceSaleRqt.getAnnonceSales(id,(resultat, err) => {
    if (err) throw err;
      res.json(resultat);
  });
});

  app.get('/annonce/:titre', (req, res) => {
  const titre = req.params.titre;
  getAnnounceSaleRqt.getAnnoncebyTitle(titre,(resultat, err) => {
    if (err) throw err;
      res.json(resultat);
  });
});

  app.get('/annonces' ,(req, res) => {
  const titre = req.params.titre;
  getAnnounceSaleRqt.getAllAnnounce((resultat, err) => {
      if (err) throw err;
        res.json(resultat);
    });
});

  app.post('/annonces/create', function (request, res) {
    console.log(request.body.titre, request.body.description, request.body.prix_vente, request.body.id_username,
      request.body.photo,request.body.state,request.body.id_categorie);
    postAnnounceSaleRqt.postAnnonceSales(request.body.titre, request.body.description, request.body.prix_vente, request.body.id_username,
    request.body.photo,request.body.state,request.body.id_categorie,(resultat, err) => {
      if (err) throw err;
        res.json(resultat);
    });
  });

  app.post('/annonces/delete', function (request, res) {
    postAnnounceSaleRqt.deleteAnnonceSalesTitle(request.body.titre,request.body.id_username,(resultat,err) => {
      if (err) throw err;
        res.json(resultat);
    });
  });


  app.post('/annonces/offer', function (request, res) {
    console.log(request.body.id_annonce, request.body.prix_achat,request.body.message_achat,request.body.id_username);
    postOfferRqt.postOffer(request.body.id_annonce, request.body.prix_achat,request.body.message_achat,request.body.id_username,(resultat, err) => {
      if (err) throw err;
        res.json(resultat);
    });
  });

 app.get('/annonces/offer/:username',(req, res) => {
  const username = req.params.username;
  getOfferRqt.getOfferbyUser(username,(resultat, err) => {
      if (err) throw err;
        res.json(resultat);
    });
});