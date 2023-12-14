const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/register.schema");
const randomString = require('randomstring');
const userService = require('../../services/user/index.service.js');
const bcrypt = require('bcrypt');

const main = async (req, res, next) => {
  try {
    //recibir info en req que vamos a tener que validar
    await validateSchema(schema, req.body);
    const { email, username, password } = req.body;
    const registrationCode = randomString.generate(30);

    const passwordEncode = await bcrypt.hash(password, 7);

    await userService.register(email, username, password, registrationCode);

    res.send({
      status: 'success',
      message: "Usuario registrado con éxito"
    })


  } catch (error) {
    next(error);
  }
};

module.exports = main;
