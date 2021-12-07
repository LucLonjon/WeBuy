const AnnonceSales = require('../models/annonce_sales').AnnonceSales;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');


async function postAnnonceSales(titre,description,prix_vente,id_username,photo,state,id_categorie,callback){
    console.log("fonction"+ titre);
    const query =  AnnonceSales.create({titre:titre,description : description ,prix_vente : prix_vente ,id_username : id_username,photo : photo ,state : state ,id_categorie : id_categorie});
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } 
    else {
        return query;
    }
}



module.exports.postAnnonceSales = postAnnonceSales;