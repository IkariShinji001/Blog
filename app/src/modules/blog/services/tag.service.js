const { where } = require('sequelize');
const Tag = require('../repositories/tag.model')

class TagService {
    async getAllTags() {
        try {
            const tags = await Tag.findAll();
            return tags;
        } catch (error) {
            throw new Error("Error fetching tags " + error.message);
        }
    }

    async createTag(tagData) {
        try {
            const newTag = await Tag.create(tagData);
            return newTag;
        } catch (error) {
            throw new Error('Error creating tag: ' + error.message);
        }
    }

    async deleteTag(id) {
        try {
            const deleted = await Tag.destroy({ where: { id: id} });
            if (deleted) {
                return { message: "Tag deleted successfully" }
            }
            throw new Error('Tag not found');

        } catch (error) {
            throw new Error('Error deleting tag: ' + error.message);
        }
    }

    async updateTag(id, tagData) {
        try {
            const [updated] = await Tag.update(tagData, {where: {id: id}})
            if(updated) {
                const updatedTag = await Tag.findOne({where: {id: id}});
                return updatedTag;
            }
            throw new Error("Tag not found")
        }catch(error) {
            throw new Error("Error updating tag: "+error.message)
        }
    }

}
module.exports = new TagService()