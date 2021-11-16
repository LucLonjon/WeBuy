import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { annonce_buyer, annonce_buyerId } from './annonce_buyer';

export interface categorieAttributes {
  idcategorie: number;
  namecategorie: string;
}

export type categoriePk = "idcategorie";
export type categorieId = categorie[categoriePk];
export type categorieOptionalAttributes = "idcategorie";
export type categorieCreationAttributes = Optional<categorieAttributes, categorieOptionalAttributes>;

export class categorie extends Model<categorieAttributes, categorieCreationAttributes> implements categorieAttributes {
  idcategorie!: number;
  namecategorie!: string;

  // categorie hasMany annonce_buyer via id_categorie
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

  static initModel(sequelize: Sequelize.Sequelize): typeof categorie {
    categorie.init({
    idcategorie: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    namecategorie: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcategorie" },
        ]
      },
    ]
  });
  return categorie;
  }
}
