const joi = require("joi");
const joiMsg = require("./joi.messages");

const imgSchema = joi
  .object({
    name: joi.string().required().messages(joiMsg.errorMsg),
    mimetype: joi
      .string()
      .valid("image/png", "image/jpeg")
      .required()
      .messages(joiMsg.errorMsg),
    size: joi.number().max(5000000).required().messages(joiMsg.errorMsg),
  })
  .unknown(true);

module.exports = imgSchema;
