const express = require('express');
const app = express()
const port = 3000
const cors = require('cors');
const Promise = require('sequelize').Promise;


const getAnnounceSaleRqt = require('./Rqt/getAnnounceSaleRqt');
const getUserRqt = require('./Rqt/getUserRqt');


app.use(express.json())
app.use(cors())
app.use('/users', require('./users/users.controller'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  app.get('/data/user/:id', (req, res) => {
    const id = req.params.id;
    getUserRqt.getUser(id,(id_user, err) => {
        res.json(id_user);
    });
});

  app.get('/data/annoncesales/:id', (req, res) => {
  const id = req.params.id;
  getAnnounceSaleRqt.getAnnonceSales(id,(resultat, err) => {
      res.json(resultat);
  });
});

  app.get('/data/annoncesales/title/:titre', (req, res) => {
  const titre = req.params.titre;
  getAnnounceSaleRqt.getAnnoncebyTitle(titre,(resultat, err) => {
      res.json(resultat);
  });
  
});

