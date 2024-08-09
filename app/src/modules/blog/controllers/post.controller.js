const PostService = require("../services/post.service");

class PostController {
  async getAllPosts(req, res, next) {
    try {
      const posts = await PostService.getAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new PostController();
