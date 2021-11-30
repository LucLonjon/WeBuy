const Sequelize = require('sequelize');
const path = require('path');


const db = new Sequelize("db_webuy", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});
module.exports = db;