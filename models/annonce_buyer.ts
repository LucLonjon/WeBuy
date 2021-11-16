import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { annonce_sales, annonce_salesId } from './annonce_sales';
import type { categorie, categorieId } from './categorie';
import type { data_user, data_userId } from './data_user';

export interface annonce_buyerAttributes {
  idOffre: number;
  idAnnonce: number;
  prix_achat: number;
  message_achat?: string;
  id_user: number;
  id_categorie: number;
}

export type annonce_buyerPk = "idOffre";
export type annonce_buyerId = annonce_buyer[annonce_buyerPk];
export type annonce_buyerOptionalAttributes = "idOffre" | "message_achat";
export type annonce_buyerCreationAttributes = Optional<annonce_buyerAttributes, annonce_buyerOptionalAttributes>;

export class annonce_buyer extends Model<annonce_buyerAttributes, annonce_buyerCreationAttributes> implements annonce_buyerAttributes {
  idOffre!: number;
  idAnnonce!: number;
  prix_achat!: number;
  message_achat?: string;
  id_user!: number;
  id_categorie!: number;

  // annonce_buyer belongsTo annonce_sales via idOffre
  idOffre_annonce_sale!: annonce_sales;
  getIdOffre_annonce_sale!: Sequelize.BelongsToGetAssociationMixin<annonce_sales>;
  setIdOffre_annonce_sale!: Sequelize.BelongsToSetAssociationMixin<annonce_sales, annonce_salesId>;
  createIdOffre_annonce_sale!: Sequelize.BelongsToCreateAssociationMixin<annonce_sales>;
  // annonce_buyer belongsTo categorie via id_categorie
  id_categorie_categorie!: categorie;
  getId_categorie_categorie!: Sequelize.BelongsToGetAssociationMixin<categorie>;
  setId_categorie_categorie!: Sequelize.BelongsToSetAssociationMixin<categorie, categorieId>;
  createId_categorie_categorie!: Sequelize.BelongsToCreateAssociationMixin<categorie>;
  // annonce_buyer belongsTo data_user via id_user
  id_user_data_user!: data_user;
  getId_user_data_user!: Sequelize.BelongsToGetAssociationMixin<data_user>;
  setId_user_data_user!: Sequelize.BelongsToSetAssociationMixin<data_user, data_userId>;
  createId_user_data_user!: Sequelize.BelongsToCreateAssociationMixin<data_user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof annonce_buyer {
    annonce_buyer.init({
    idOffre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'annonce_sales',
        key: 'idannonce'
      }
    },
    idAnnonce: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prix_achat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message_achat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'data_user',
        key: 'id_user'
      }
    },
    id_categorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'idcategorie'
      }
    }
  }, {
    sequelize,
    tableName: 'annonce_buyer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOffre" },
        ]
      },
      {
        name: "fk_annonce_buyer_id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "id_categorie",
        using: "BTREE",
        fields: [
          { name: "id_categorie" },
        ]
      },
    ]
  });
  return annonce_buyer;
  }
}
