const register = require('./register.service');
const getByUsernameOrEmail = require('./getByUsernameOrEmail.service');
const registerSendEmail = require('./registerSendEmail.service');
const getByRegistrarionCode = require('./getByRegistrationCode.service');
const activate = require('./activate.service');
const getById = require('./getById.service');
const updateAvatar = require('./updateAvatar.service.js');
const updateRecoverPassCode = require('./updateRecoverPassCode.service.js');
const passwordRecoverSendEmail = require('./passwordRecoverSendEmail.service.js');



module.exports = {
    register,
    getByUsernameOrEmail,
    registerSendEmail,
    getByRegistrarionCode,
    activate,
    getById,
    updateAvatar,
    updateRecoverPassCode,
    passwordRecoverSendEmail
}