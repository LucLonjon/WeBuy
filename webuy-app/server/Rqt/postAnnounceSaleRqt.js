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

function deleteAnnonceSales(id, callback){
    return AnnonceSales.destroy({ where: { idAnnonce: id } }).then(result => {
        if (callback)
        callback(result > 0);
    });
}

module.exports.deleteAnnonceSales = deleteAnnonceSales;

async function deleteAnnonceSalesTitle(titre,username,callback){
    return AnnonceSales.findOne({ where: { id_username: username , titre : titre} }).then(result => {
        if(result){
            deleteAnnonceSales(result.idAnnonce, (res) => {
                if (callback)
                callback(res);
            })
        } else {
            if (callback)
            callback(peripheral);
        }
    });
    

}

module.exports.deleteAnnonceSalesTitle = deleteAnnonceSalesTitle ;


