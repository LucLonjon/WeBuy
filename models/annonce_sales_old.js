const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../webuy-app/server/models/database');

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
        name: "fk_annonce_sales_id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
module.exports.AnnonceSales = AnnonceSales;
db.sync();