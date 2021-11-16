import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { annonce_buyer, annonce_buyerId } from './annonce_buyer';
import type { annonce_sales, annonce_salesId } from './annonce_sales';

export interface data_userAttributes {
  id_user: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
}

export type data_userPk = "id_user";
export type data_userId = data_user[data_userPk];
export type data_userOptionalAttributes = "id_user";
export type data_userCreationAttributes = Optional<data_userAttributes, data_userOptionalAttributes>;

export class data_user extends Model<data_userAttributes, data_userCreationAttributes> implements data_userAttributes {
  id_user!: number;
  nom!: string;
  prenom!: string;
  mail!: string;
  mdp!: string;

  // data_user hasMany annonce_buyer via id_user
  annonce_buyers!: annonce_buyer[];
  getAnnonce_buyers!: Sequelize.HasManyGetAssociationsMixin<annonce_buyer>;
  setAnnonce_buyers!: Sequelize.HasManySetAssociationsMixin<annonce_buyer, annonce_buyerId>;
  addAnnonce_buyer!: Sequelize.HasManyAddAssociationMixin<annonce_buyer, annonce_buyerId>;
  addAnnonce_buyers!: Sequelize.HasManyAddAssociationsMixin<annonce_buyer, annonce_buyerId>;
  createAnnonce_buyer!: Sequelize.HasManyCreateAssociationMixin<annonce_buyer>;
  removeAnnonce_buyer!: Sequelize.HasManyRemoveAssociationMixin<annonce_buyer, annonce_buyerId>;
  removeAnnonce_buyers!: Sequelize.HasManyRemoveAssociationsMixin<annonce_buyer, annonce_buyerId>;
  hasAnnonce_buyer!: Sequelize.HasManyHasAssociationMixin<annonce_buyer, annonce_buyerId>;
  hasAnnonce_buyers!: Sequelize.HasManyHasAssociationsMixin<annonce_buyer, annonce_buyerId>;
  countAnnonce_buyers!: Sequelize.HasManyCountAssociationsMixin;
  // data_user hasMany annonce_sales via id_user
  annonce_sales!: annonce_sales[];
  getAnnonce_sales!: Sequelize.HasManyGetAssociationsMixin<annonce_sales>;
  setAnnonce_sales!: Sequelize.HasManySetAssociationsMixin<annonce_sales, annonce_salesId>;
  addAnnonce_sale!: Sequelize.HasManyAddAssociationMixin<annonce_sales, annonce_salesId>;
  addAnnonce_sales!: Sequelize.HasManyAddAssociationsMixin<annonce_sales, annonce_salesId>;
  createAnnonce_sale!: Sequelize.HasManyCreateAssociationMixin<annonce_sales>;
  removeAnnonce_sale!: Sequelize.HasManyRemoveAssociationMixin<annonce_sales, annonce_salesId>;
  removeAnnonce_sales!: Sequelize.HasManyRemoveAssociationsMixin<annonce_sales, annonce_salesId>;
  hasAnnonce_sale!: Sequelize.HasManyHasAssociationMixin<annonce_sales, annonce_salesId>;
  hasAnnonce_sales!: Sequelize.HasManyHasAssociationsMixin<annonce_sales, annonce_salesId>;
  countAnnonce_sales!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof data_user {
    data_user.init({
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mdp: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'data_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
  return data_user;
  }
}
