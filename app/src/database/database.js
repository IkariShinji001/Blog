const Sequelize = require("sequelize");
class DB {
  constructor() {
    this.sequelize = new Sequelize("Blog", "postgres", "duyduy2003", {
      host: "localhost",
      dialect: "postgres",
    });
  }

  async connectDatabase() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = new DB();
