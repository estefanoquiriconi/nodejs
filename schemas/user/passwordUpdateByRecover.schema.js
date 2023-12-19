const joi = require("joi");
const joiMsg = require("../joi.messages");

const passwordUpdateByRecover = joi.object({
  email: joi.string().email().required().messages(joiMsg.errorMsg),
  recoverPassCode: joi
    .string()
    .min(10)
    .max(10)
    .required()
    .messages(joiMsg.errorMsg),
  newPass: joi
    .string()
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
    )
    .required()
    .messages({ ...joiMsg.errorMsg, ...joiMsg.errorMsgPassword }),
});

module.exports = passwordUpdateByRecover;
