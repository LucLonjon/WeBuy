import type { Sequelize } from "sequelize";
import { annonce_buyer } from "./annonce_buyer";
import type { annonce_buyerAttributes, annonce_buyerCreationAttributes } from "./annonce_buyer";
import { annonce_sales } from "./annonce_sales";
import type { annonce_salesAttributes, annonce_salesCreationAttributes } from "./annonce_sales";
import { categorie } from "./categorie";
import type { categorieAttributes, categorieCreationAttributes } from "./categorie";
import { data_user } from "./data_user";
import type { data_userAttributes, data_userCreationAttributes } from "./data_user";

export {
  annonce_buyer,
  annonce_sales,
  categorie,
  data_user,
};

export type {
  annonce_buyerAttributes,
  annonce_buyerCreationAttributes,
  annonce_salesAttributes,
  annonce_salesCreationAttributes,
  categorieAttributes,
  categorieCreationAttributes,
  data_userAttributes,
  data_userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  annonce_buyer.initModel(sequelize);
  annonce_sales.initModel(sequelize);
  categorie.initModel(sequelize);
  data_user.initModel(sequelize);

  annonce_buyer.belongsTo(annonce_sales, { as: "idOffre_annonce_sale", foreignKey: "idOffre"});
  annonce_sales.hasOne(annonce_buyer, { as: "annonce_buyer", foreignKey: "idOffre"});
  annonce_buyer.belongsTo(categorie, { as: "id_categorie_categorie", foreignKey: "id_categorie"});
  categorie.hasMany(annonce_buyer, { as: "annonce_buyers", foreignKey: "id_categorie"});
  annonce_buyer.belongsTo(data_user, { as: "id_user_data_user", foreignKey: "id_user"});
  data_user.hasMany(annonce_buyer, { as: "annonce_buyers", foreignKey: "id_user"});
  annonce_sales.belongsTo(data_user, { as: "id_user_data_user", foreignKey: "id_user"});
  data_user.hasMany(annonce_sales, { as: "annonce_sales", foreignKey: "id_user"});

  return {
    annonce_buyer: annonce_buyer,
    annonce_sales: annonce_sales,
    categorie: categorie,
    data_user: data_user,
  };
}
