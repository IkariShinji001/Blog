const CategoryService = require("../services/category.service");

class CategoryController {
  async getAllCategory(req, res, next) {
    try {
      const categories = await CategoryService.getAllCategory();
      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
  async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      const category = await CategoryService.createCategory(name);
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
  async deleteCategory(req, res, next) {
    try {
      const id = req.params.id
      const category = await CategoryService.deleteCategory(id);
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
  async getCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await CategoryService.getCategoryById(id);
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
  async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { nameData } = req.body;
      const category = await CategoryService.updateCategory(id, nameData);
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new CategoryController();
