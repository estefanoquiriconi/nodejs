const jsonwebtoken = require("jsonwebtoken");
const errors = require("../../helpers/errors.helper");

const main = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      errors.notAuthorizedError("El token es un campo requerido");
    }

    let tokeninfo;

    try {
      tokeninfo = jsonwebtoken.verify(authorization, process.env.SECRET_KEY);
    } catch (error) {
      errors.notAuthorizedError("El token es incorrecto");
    }

    req.user = tokeninfo;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = main;
