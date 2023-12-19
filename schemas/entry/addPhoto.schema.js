const joi = require('joi');
const imgSchema = require('../img.schema');


const addPhotoSchema = joi.object({
    photo: imgSchema.required()
});

module.exports = addPhotoSchema;