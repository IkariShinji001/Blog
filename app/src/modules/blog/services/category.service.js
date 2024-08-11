const Category = require("../repositories/category.model");

class CategoryService {
  async getAllCategory() {
    try {
      // check empty category
      if (Category === null) {
        return { error: "Category is empty" };
      }
      // get all categories
      const categories = await Category.findAll();
      return categories;
    } catch (error) {
      console.log(error);
    }
  }
  async createCategory(name) {
    // check existed category
    const existedCategory = await Category.findOne({ where: { name } });
    if (existedCategory) {
      return { error: "Category is already existed" };
    }
    try {
      // create new category
      const category = await Category.create({ name });
      return category;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCategory(id) {
    try {
      // check existed category
      const existedCategory = await Category.findOne({ where: { id } });
      if (!existedCategory) {
        return { error: "Category is not existed" };
      }
      const category = await Category.destroy({ where: { id } });
      return category;
    } catch (error) {
      console.log(error);
    }
  }
  // async getCategoryById(id) {
  //   try {
  //     const category = await Category.findById({id});
  //     return category;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async updateCategory(id, name) {
    try {
      // check existed category
      const existedCategory = await Category.findOne({ where: { id } });
      if (!existedCategory) {
        return { error: "Category is not existed" };
      }
      // update category
      const category = await Category.update({ name: name }, { where: { id } });
      return category;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CategoryService();
