const express = require("express");
const app = express();
const port = 3000;
const db = require("./app/src/database/database");

const bootstrap = async () => {
  try {
    await db.connectDatabase();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();

app.get("/", (req, res) => {
  res.json("Hello World!");
});
