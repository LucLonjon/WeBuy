var DataTypes = require("sequelize").DataTypes;
var _annonce_buyer = require("../webuy-app/server/models/annonce_buyer");
var _annonce_sales = require("../webuy-app/server/models/annonce_sales");
var _categorie = require("../webuy-app/server/models/categorie");
var _data_user = require("../webuy-app/server/models/data_user");

function initModels(sequelize) {
  var annonce_buyer = _annonce_buyer(sequelize, DataTypes);
  var annonce_sales = _annonce_sales(sequelize, DataTypes);
  var categorie = _categorie(sequelize, DataTypes);
  var data_user = _data_user(sequelize, DataTypes);

  annonce_buyer.belongsTo(annonce_sales, { as: "idOffre_annonce_sale", foreignKey: "idOffre"});
  annonce_sales.hasOne(annonce_buyer, { as: "annonce_buyer", foreignKey: "idOffre"});
  annonce_buyer.belongsTo(categorie, { as: "id_categorie_categorie", foreignKey: "id_categorie"});
  categorie.hasMany(annonce_buyer, { as: "annonce_buyers", foreignKey: "id_categorie"});
  annonce_buyer.belongsTo(data_user, { as: "id_user_data_user", foreignKey: "id_user"});
  data_user.hasMany(annonce_buyer, { as: "annonce_buyers", foreignKey: "id_user"});
  annonce_sales.belongsTo(data_user, { as: "id_user_data_user", foreignKey: "id_user"});
  data_user.hasMany(annonce_sales, { as: "annonce_sales", foreignKey: "id_user"});

  return {
    annonce_buyer,
    annonce_sales,
    categorie,
    data_user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
