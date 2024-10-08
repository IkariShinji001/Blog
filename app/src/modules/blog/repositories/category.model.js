const { DataTypes } = require("sequelize");
const db = require("../../../database/database");

const Category = db.sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
