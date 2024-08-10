const express = require("express");
const app = express();
const port = 3000;
const db = require("./app/src/database/database");
const postRoute = require("./app/src/modules/blog/routers/post.router");
const adminRoute = require("./app/src/modules/admin/routers/admin.router");
const cookieParser = require("cookie-parser");

const apiRoute = "/api/v1";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(apiRoute + "/posts", postRoute);
app.use(apiRoute + "/admins", adminRoute);

app.get("/", (req, res) => {
  res.json("Hello World!");
});
