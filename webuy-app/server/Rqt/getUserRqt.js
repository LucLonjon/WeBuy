const DataUser = require('../models/data_user').DataUser;
var DataTypes = require('sequelize/lib/data-types');
const db = require('../models/database');


function getUser(id,callback){
    const query = DataUser.findByPk(id);
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
module.exports.getUser = getUser;