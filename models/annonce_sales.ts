import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { annonce_buyer, annonce_buyerCreationAttributes, annonce_buyerId } from './annonce_buyer';
import type { data_user, data_userId } from './data_user';

export interface annonce_salesAttributes {
  idAnnonce: number;
  titre: string;
  description?: string;
  prix_vente: number;
  id_user: number;
  photo?: string;
  state: string;
}

export type annonce_salesPk = "idAnnonce";
export type annonce_salesId = annonce_sales[annonce_salesPk];
export type annonce_salesOptionalAttributes = "idAnnonce" | "description" | "photo";
export type annonce_salesCreationAttributes = Optional<annonce_salesAttributes, annonce_salesOptionalAttributes>;

export class annonce_sales extends Model<annonce_salesAttributes, annonce_salesCreationAttributes> implements annonce_salesAttributes {
  idAnnonce!: number;
  titre!: string;
  description?: string;
  prix_vente!: number;
  id_user!: number;
  photo?: string;
  state!: string;

  // annonce_sales hasOne annonce_buyer via idOffre
  annonce_buyer!: annonce_buyer;
  getAnnonce_buyer!: Sequelize.HasOneGetAssociationMixin<annonce_buyer>;
  setAnnonce_buyer!: Sequelize.HasOneSetAssociationMixin<annonce_buyer, annonce_buyerId>;
  createAnnonce_buyer!: Sequelize.HasOneCreateAssociationMixin<annonce_buyerCreationAttributes>;
  // annonce_sales belongsTo data_user via id_user
  id_user_data_user!: data_user;
  getId_user_data_user!: Sequelize.BelongsToGetAssociationMixin<data_user>;
  setId_user_data_user!: Sequelize.BelongsToSetAssociationMixin<data_user, data_userId>;
  createId_user_data_user!: Sequelize.BelongsToCreateAssociationMixin<data_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof annonce_sales {
    annonce_sales.init({
    idAnnonce: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prix_vente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'data_user',
        key: 'id_user'
      }
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'annonce_sales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAnnonce" },
        ]
      },
      {
        name: "fk_annonce_sales_id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
  return annonce_sales;
  }
}
