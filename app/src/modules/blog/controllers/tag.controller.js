const TagService = require('../services/tag.service')

class TagController {
    async getAllTags(req, res) {
        try {
            const tags = await TagService.getAllTags();
            res.status(200).json(tags);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    }

    async createTag(req, res) {
        try {
            const tagData = req.body;
            const newTag = await TagService.createTag(tagData);
            res.status(201).json(newTag)
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    async deleteTag(req, res) {
        try {
            const { id } = req.params;
            const response = await TagService.deleteTag(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTag(req, res) {
        try{
            const {id} = req.params
            const tagData = req.body;
            const updatedTag = await TagService.updateTag(id, tagData)
            res.status(200).json(updatedTag);
        }catch(error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports = new TagController();