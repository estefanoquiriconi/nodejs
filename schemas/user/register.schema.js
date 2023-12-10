const joi = require("joi");
const joiMsg = require("../joi.messages");

const registerSchema = joi.object({
  username: joi
    .string()
    .min(3)
    .max(30)
    .required()
    .pattern(/^\S*$/)
    .messages({ ...joiMsg.errorMsg, ...joiMsg.errorMsgUsername }),
  password: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages({ ...joiMsg.errorMsg, ...joiMsg.errorMsgPassword }),
  email: joi.string().email().required().messages(joiMsg.errorMsg),
});

module.exports = registerSchema;
