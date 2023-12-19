const entryService = require("../../services/entry/index.service.js");
const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/entry/vote.schema.js");

const main = async (req, res, next) => {
  try {

    await validateSchema(schema, req.body);

    const { vote } = req.body;
    const user = req.user;
    const entry = req.entry;

    await entryService.voteEntry(vote, user, entry);

    const voteAvg = await entryService.getVoteAvg(entry);

    res.send({
      status: "success",
      message: "Voto registrado con éxito",
      data: {
        photo: voteAvg
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = main;
