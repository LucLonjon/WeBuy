const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const { AnnonceBuyer } = require('./annonce_buyer');
const { AnnonceSales } = require('./annonce_sales');
const { Categorie } = require('./categorie');
const db = require('./database');

class DataUser extends Sequelize.Model {}
DataUser.init({
    username: {
      type: DataTypes.STRING(50),
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
    adresse: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    
  }, {
    sequelize : db,
    tableName: 'data_user',
    timestamps: false,
    defaultScope: {
      // exclude hash by default
          attributes: { exclude: ['hash'] }
      },
      scopes: {
          // include hash with this scope
          withHash: { attributes: {}, }
      },
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  }
);;


  module.exports.DataUser = DataUser;

  Categorie.sync();
  DataUser.sync();
  AnnonceSales.sync();
  AnnonceBuyer.sync();