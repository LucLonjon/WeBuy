const AnnonceSales = require('../models/annonce_sales').AnnonceSales;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');


async function postAnnonceSales(titre,description,prix_vente,id_username,photo,state,id_categorie,callback){
    return AnnonceSales.create(titre,description,prix_vente,id_username,photo,state,id_categorie).then(result => {
        if (callback)
        callback(result);
    });
}


module.exports.postAnnonceSales = postAnnonceSales;