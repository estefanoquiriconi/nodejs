const validateSchema = require("../../helpers/validate.helper");
const schema = require("../../schemas/user/passwordRecover.schema.js");
const userService = require('../../services/user/index.service.js');
const randomstring = require('randomstring');
const errors = require('../../helpers/errors.helper.js');



const main = async (req, res, next) => {

    try {
        //Validación
        await validateSchema(schema, req.body);

        const { email } = req.body;
        const users = await userService.getByUsernameOrEmail(email, '');

        if(users.length === 0){
            errors.notFoundError('Usuario no encotrado', 'USER_NOT_FOUND');
        }

        if(users.length > 1){
            errors.conflictError('Por alguna razón existen más de un usuario', 'MANY_USERS_ERROR');
        }

        const user = users[0];
        const recoverPassCode = randomstring.generate(10);
        await userService.updateRecoverPassCode(user, recoverPassCode);

        await userService.passwordRecoverSendEmail(user.email, recoverPassCode);

        res.send({
            status: "success",
            message: "RecoverPassCode enviado con éxito",
        })

        
    } catch (error) {
        next(error);        
    }

}

module.exports = main;