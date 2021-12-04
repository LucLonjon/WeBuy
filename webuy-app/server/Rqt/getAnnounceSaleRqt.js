const AnnonceSales = require('../models/annonce_sales').AnnonceSales;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');


async function getAnnonceSales(id,callback){
    const query = AnnonceSales.findByPk(id);
    if (callback) {
        const result = await query;
        callback(result);
    } else {
        return query;
    }
}



async function getAnnoncebyTitle(title,callback){
    const query =  AnnonceSales.findAndCountAll({ where: { titre: title } });
    if (callback) {
        const result = await query;
        callback(result);
    } else {
        return query;
    }
}

async function getAllAnnounce(callback){
    const query = AnnonceSales.findAll();
    if (callback)
    {
        const result = await query;
        callback(result);
    } 
    else {
        return query;
    }
    
}

module.exports.getAnnonceSales = getAnnonceSales;
module.exports.getAnnoncebyTitle = getAnnoncebyTitle ;
module.exports.getAllAnnounce = getAllAnnounce ;