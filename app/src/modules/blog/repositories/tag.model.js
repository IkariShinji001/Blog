const { DataTypes } = require('sequelize');
const db = require("../../.././database/database")

const Tag = db.sequelize.define('tags', 
{
  id: {
    type: DataTypes.INTEGER,
    allowNull:false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Tag;
