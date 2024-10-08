const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

router.route('/').get(CategoryController.getAllCategory);
router.route('/').post(CategoryController.createCategory);
router.route('/:id').delete(CategoryController.deleteCategory);
// router.route('/:id').get(CategoryController.getCategoryById); //co can thiet khong: khong
router.route('/:id').patch(CategoryController.updateCategory);

module.exports = router;