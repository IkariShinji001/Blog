const CategoryService = require("../services/category.service");

class CategoryController {
  async getAllCategories(req, res, next) {
    try {
      const categories = await CategoryService.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new CategoryController();
