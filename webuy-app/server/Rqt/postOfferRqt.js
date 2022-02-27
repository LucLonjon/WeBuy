const BuyerOffer = require('../models/annonce_buyer').AnnonceBuyer;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');



async function postOffer(id_annonce, prix_achat, message_achat,id_username,callback){
    console.log("fonction"+ titre);
    const query = BuyerOffer.create({id_annonce : id_annonce, prix_achat : prix_achat, message_achat  : message_achat  ,id_username : id_username});
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } 
    else {
        return query;
    }
}

module.exports.postOffer= postOffer;