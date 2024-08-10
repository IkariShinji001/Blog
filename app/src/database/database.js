const Sequelize = require("sequelize");
class DB {
  constructor() {
    this.sequelize = new Sequelize("Blog", "postgres", "hukhan0607", {
      host: "localhost",
      dialect: "postgres",
    });
  }

  async connectDatabase() {
    try {
      await this.sequelize.authenticate();
      console.log("Connection has been established successfully.");
      await this.sequelize.sync()
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = new DB();
