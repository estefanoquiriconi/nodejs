const joi = require("joi");
const joiMsg = require("../joi.messages");

const passwordRecoverSchema = joi.object({
  email: joi.string().email().required().messages(joiMsg.errorMsg)
});

module.exports = passwordRecoverSchema;
