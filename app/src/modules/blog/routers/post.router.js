const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post.controller");

router.route("/").get(PostController.getAllPosts);

module.exports = router;
