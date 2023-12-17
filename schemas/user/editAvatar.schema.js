const joi = require('joi');
const imgSchema = require('../img.schema');


const editAvatarSchema = joi.object({
    avatar: imgSchema.required()
});

module.exports = editAvatarSchema;