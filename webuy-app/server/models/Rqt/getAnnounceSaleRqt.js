const AnnonceSales = require('../annonce_sales').AnnonceSales;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../database');


function getAnnonceSales(id,callback){
    const query = AnnonceSales.findByPk(id);
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}

module.exports.getAnnonceSales = getAnnonceSales;