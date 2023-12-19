const errors = require("../../helpers/errors.helper");
const entryService = require('../../services/entry/index.service');

const main = async (req, res, next) => {
  try {
    if (req.user.id === req.entry.userId) {
      errors.notAuthorizedError("Usted no puede votar a su propia publicación");
    }

    const votes = await entryService.getVoteByUserId(req.user.id);

    if(votes.length > 0) {
      errors.notAuthorizedError("Usted no puede votar más de una vez una misma publicación");
    }


    next();
  } catch (error) {
    next(error);
  }
};

module.exports = main;
