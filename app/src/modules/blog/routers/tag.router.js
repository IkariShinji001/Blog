const express = require('express')
const router = express.Router();
const Tag = require('../controllers/tag.controller')

router.route('/')
    .get(Tag.getAllTags)