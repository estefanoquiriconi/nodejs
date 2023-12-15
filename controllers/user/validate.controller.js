const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/validate.schema");
const userService = require("../../services/user/index.service.js");
const errors = require("../../helpers/errors.helper.js");

const main = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;
    //Validar schema
    await validateSchema(schema, { registrationCode });

    const users = await userService.getByRegistrarionCode(registrationCode);

    if (users.length > 1) {
      errors.conflictError(
        "Hemos detectato más de un usuario con el mismo regristrationCode",
        "USER_VALIDATE_ERROR"
      );
    }

    console.log(users.length);

    if (users.length == 0) {
      errors.conflictError(
        "Usuario activado con anterioridad",
        "USER_VALIDATE_ERROR"
      );
    }

    await userService.activate(users[0]);

    res.send({
      status: 'success',
      message: "Usuario activado con éxito"
    })


  } catch (error) {
    next(error);
  }
};

module.exports = main;
