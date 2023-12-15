const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/register.schema");
const randomString = require('randomstring');
const userService = require('../../services/user/index.service.js');
const bcrypt = require('bcrypt');
const errors = require('../../helpers/errors.helper.js');

const main = async (req, res, next) => {
  try {
    //recibir info en req que vamos a tener que validar
    await validateSchema(schema, req.body);
    const { email, username, password } = req.body;

    //Generamos código aleatorio
    const registrationCode = randomString.generate(30);

    //Validamos que no exista un usuario ya registrado
    const users = await userService.getByUsernameOrEmail(email, username);
    if(users.length > 0) {
      errors.conflictError('El username o email ya se encuentra registrado', 'USER_REGISTER_ERROR');
    }

    //Encriptamos la contraseña
    const passwordEncode = await bcrypt.hash(password, 7);

    //Registramos
    await userService.register(email, username, passwordEncode, registrationCode);
    
    //Enviamos email
    await userService.registerSendEmail(email, registrationCode);

    res.send({
      status: 'success',
      message: "Usuario registrado con éxito"
    })


  } catch (error) {
    next(error);
  }
};

module.exports = main;
