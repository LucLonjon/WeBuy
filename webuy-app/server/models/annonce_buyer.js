const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('./database');

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
      allowNull: false
    },
    id_username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'data_user',
        key: 'username'
      }
    }
  }, {
    sequelize : db,
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
        name: "fk_annonce_buyer_id_username",
        using: "BTREE",
        fields: [
          { name: "id_username" },
        ]
      },
    ]
  });

  module.exports.AnnonceBuyer = AnnonceBuyer;
  db.sync();