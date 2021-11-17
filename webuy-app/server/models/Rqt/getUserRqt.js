const DataUser = require('../data_user').DataUser;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../database');


function getAllUser(callback){
    const query = DataUser.findByPk(1);
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}
/*const query = DataUser.findAll({
    where: {
        id_user: {
          [Seque]: 1
        }
      }
    });
    if (callback) {
        return query.then(result => {
            callback(result);
        });
    } else {
        return query;
    }
}*/
module.exports.getAllUser = getAllUser;