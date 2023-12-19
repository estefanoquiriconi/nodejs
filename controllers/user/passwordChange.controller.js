const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/passwordChange.schema.js");
const userService = require("../../services/user/index.service.js");
const errors = require("../../helpers/errors.helper.js");
const bcrypt = require("bcrypt");

const main = async (req, res, next) => {
  try {
    //Validamos
    await validateSchema(schema, req.body);

    const { oldPass, newPass } = req.body;

    const user = req.user;

    const validPassword = await bcrypt.compareSync(oldPass, user.password);

    if (!validPassword) {
      errors.notAuthorizedError(
        "Credenciales incorrectas",
        "INVALID_CREDENTIALS"
      );
    }

    user.password = await bcrypt.hash(newPass, 5);

    await userService.passwordUpdate(user);

    res.send({
      status: "success",
      message: "Contraseña actualizada con éxito",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = main;
