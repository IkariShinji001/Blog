const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin.controller");

router.route("/").post(AdminController.createAdmin);
router.route("/login").post(AdminController.login);

module.exports = router;
