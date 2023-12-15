const joi = require("joi");
const joiMsg = require("../joi.messages");

const validateSchema = joi.object({
  registrationCode: joi
    .string()
    .min(30)
    .max(30)
    .required()
    .pattern(/^\S*$/)
    .message({ ...joiMsg.errorMsg, ...joiMsg.errorMsgUsername })
});

module.exports = validateSchema;