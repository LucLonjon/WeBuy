const Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');
const db = require('./database');

class Categorie extends Sequelize.Model {}
Categorie.init({
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

  },
  {
    sequelize : db,
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
  }
);

module.exports.Categorie = Categorie;
db.sync();