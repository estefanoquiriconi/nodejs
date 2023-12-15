const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/login.schema");
const randomString = require('randomstring');
const userService = require('../../services/user/index.service.js');
const bcrypt = require('bcrypt');
const errors = require('../../helpers/errors.helper.js');
const jwt = require('jsonwebtoken');
const securityService = require('../../services/security/index.service.js');

const main = async (req, res, next)=> {
    try {
        //Crear validación
        await validateSchema(schema, req.body);

        const users = await userService.getByUsernameOrEmail('', req.body.username);
        if(users.length === 0) {
            errors.notFoundError('Usuario no encontrado', 'USER_NOT_FOUND');
        }

        const validPassword = await bcrypt.compare(req.body.password, users[0].password);
        if(!validPassword) {
            errors.notAuthorizedError('Credenciales incorrectas', 'INVALID_CREDENTIALS');
        }

        if(!users[0].active){
            if(users[0].registrationCode !== null){
                errors.forbiddenError('El usuario aún no fue activado', 'PENDING_ACTIVATION');
            }else{
                errors.forbiddenError('El usuario está desactivado', 'USER_INVACTIVE');
            }
        }

        const tokenInfo = {
            id: users[0].id,
            role: users[0].role
        }

        const token = securityService.createToken(tokenInfo);

        res.send({
            status: 'success',
            message: "Usuario logueado con éxito",
            data: {
                token
            }
          });

    } catch (error) {
        next(error);
    }
}

module.exports = main;