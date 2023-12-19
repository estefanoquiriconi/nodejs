const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/passwordUpdateByRecover.schema.js");
const userService = require("../../services/user/index.service.js");
const errors = require("../../helpers/errors.helper.js");
const bcrypt = require('bcrypt');

const main = async (req, res, next) => {
  try {
    //Validamos
    await validateSchema(schema, req.body);

    const { email, recoverPassCode, newPass } = req.body;

    const users = await userService.getByUsernameOrEmail(email, "");

    if (users.length === 0) {
      errors.notFoundError("Usuario no encotrado", "USER_NOT_FOUND");
    }

    if (users.length > 1) {
      errors.conflictError(
        "Por alguna razón existen más de un usuario",
        "MANY_USERS_ERROR"
      );
    }

    const user = users[0];

    if (!user.recoverPassCode) {
      errors.conflictError(
        "El usuario no solicitó una recuperación de contraseña.",
        "INVALID_RECOVER_PASS_ERROR"
      );
    }

    if (user.recoverPassCode !== recoverPassCode) {
      errors.conflictError(
        "El código de recuperación es incorrecto.",
        "RECOVER_PASS_CODE_ERROR"
      );
    }

    user.password = await bcrypt.hash(newPass, 5);

    await userService.passwordUpdate(user);

    res.send({
      status: "success",
      message: "Contraseña actualizada con éxito",
  })


  } catch (error) {
    next(error);
  }
};

module.exports = main;
