const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../webuy-app/server/models/database');

class AnnonceBuyer extends Sequelize.Model {}
AnnonceBuyer.init({
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

  module.exports.AnnonceBuyer = AnnonceBuyer;
  db.sync();