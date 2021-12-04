var DataTypes = require("sequelize").DataTypes;
var _annonce_buyer = require("./annonce_buyer");
var _annonce_sales = require("./annonce_sales");
var _categorie = require("../../../models/categorie");
var _data_user = require("./data_user");
const db = require('./database');

function initModels(sequelize) {

  var data_user = _data_user(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var annonce_buyer = _annonce_buyer(sequelize, DataTypes);
  var annonce_sales = _annonce_sales(sequelize, DataTypes);

  annonce_buyer.belongsTo(annonce_sales, { as: "idOffre_annonce_sale", foreignKey: "idOffre"});
  annonce_sales.hasOne(annonce_buyer, { as: "annonce_buyer", foreignKey: "idOffre"});
  annonce_sales.belongsTo(categorie, { as: "id_categorie_categorie", foreignKey: "id_categorie"});
  categorie.hasMany(annonce_sales, { as: "annonce_sales", foreignKey: "id_categorie"});
  annonce_buyer.belongsTo(data_user, { as: "id_username_data_user", foreignKey: "id_username"});
  data_user.hasMany(annonce_buyer, { as: "annonce_buyers", foreignKey: "id_username"});
  annonce_sales.belongsTo(data_user, { as: "id_username_data_user", foreignKey: "id_username"});
  data_user.hasMany(annonce_sales, { as: "annonce_sales", foreignKey: "id_username"});



  return {
    data_user,
    categorie,
    annonce_buyer,
    annonce_sales,
  };
}


module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
