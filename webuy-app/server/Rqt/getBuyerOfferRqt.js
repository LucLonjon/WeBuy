const BuyerOffer = require('../annonce_sales').AnnonceBuyer;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');


async function getBuyerOffer(id,callback){
    const query =  BuyerOffer.findByPk(id);
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}


async function getBuyerAllOffer(callback){
    const query =  BuyerOffer.findAll();
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}

module.exports.getBuyerOffer = getBuyerOffer;
module.exports.getBuyerAllOffer = getBuyerAllOffer;
/*
function getOfferbyUser(title,callback){
    const query =  AnnonceSales.findAndCountAll({ where: { titre: title } });
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}*/