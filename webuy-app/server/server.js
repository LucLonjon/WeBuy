const express = require('express');
const app = express()
const port = 3000
const cors = require('cors');
const Promise = require('sequelize').Promise;

const getUserRqt = require('./models/Rqt/getUserRqt');


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  app.get('/user', (req, res) => {
    getUserRqt.getAllUser((configurations, err) => {
        res.json(configurations);
    });
});