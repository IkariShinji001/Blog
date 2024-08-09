const Category = require('../repositories/category.model');

class CategoryService {
 
  async getAllCategories() {
    try {
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new CategoryService();