const Sequelize = require('sequelize');
const path = require('path');

//config luc 
/** 
const db = new Sequelize("db_webuy", "admin", "root",{
    dialect: "mysql",
    host: "localhost"
});
**/

const db = new Sequelize("db_webuy", "root", "root",{
    dialect: "mysql",
    host: "localhost"
});
module.exports = db;