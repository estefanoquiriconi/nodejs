const joi = require("joi");
const joiMsg = require("../joi.messages");

const voteSchema = joi.object({
    vote : joi.number().min(1).max(5).required().messages({...joiMsg.errorMsg, ...joiMsg.errorMsgVote})
});

module.exports = voteSchema;