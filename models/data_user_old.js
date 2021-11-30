const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('../webuy-app/server/models/database');

class DataUser extends Sequelize.Model {}
DataUser.init({
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
    sequelize : db,
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


  module.exports.DataUser = DataUser;

  db.sync();