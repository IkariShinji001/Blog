const express = require('express')
const router = express.Router();
const TagController = require('../controllers/tag.controller');

router.route('/')
    .get(TagController.getAllTags)
    .post(TagController.createTag)

router.route("/:id")
    .delete(TagController.deleteTag)
    .patch(TagController.updateTag)

module.exports = router;