const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('./database');

class AnnonceSales extends Sequelize.Model {}
AnnonceSales.init({
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
      allowNull: false
    },
    prix_vente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'data_user',
        key: 'username'
      }
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    sequelize : db,
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
        name: "fk_annonce_sales_id_username",
        using: "BTREE",
        fields: [
          { name: "id_username" },
        ]
      },
      {
        name: "fk_annonce_sales_id_categorie",
        using: "BTREE",
        fields: [
          { name: "id_categorie" },
        ]
      },
    ]
  });
  
module.exports.AnnonceSales = AnnonceSales;