const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

router.route('/').get(CategoryController.getAllCategories);

module.exports = router;