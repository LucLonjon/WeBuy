const express = require('express');
const app = express()
const port = 3000
const Promise = require('sequelize').Promise;

//sequelize
const { Sequelize } = require('sequelize');

//Connection
const sequelize = new Sequelize("db_webuy", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  

try {
    sequelize.authenticate();
    console.log('Connecté à la base de données MySQL!');
    sequelize.query("SELECT * from data_user").then(([results, metadata]) => {
        console.log(results);
      })
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }