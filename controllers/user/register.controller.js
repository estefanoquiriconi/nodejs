const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/register.schema");
const main = async (req, res, next) => {
  try {
    //recibir info en req que vamos a tener que validar
    await validateSchema(schema, req.body);
    const { email, username, password } = req.body;
  } catch (error) {
    next(error);
  }
};

module.exports = main;
