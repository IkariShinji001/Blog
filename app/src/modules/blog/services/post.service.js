const Post = require("../repositories/post.model");

class PostService {
  async getAllPosts() {
    try {
      const posts = await Post.findAll();
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new PostService();
