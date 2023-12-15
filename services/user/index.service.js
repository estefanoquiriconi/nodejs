const register = require('./register.service');
const getByUsernameOrEmail = require('./getByUsernameOrEmail.service');
const registerSendEmail = require('./registerSendEmail.service');
const getByRegistrarionCode = require('./getByRegistrationCode.service');
const activate = require('./activate.service');



module.exports = {
    register,
    getByUsernameOrEmail,
    registerSendEmail,
    getByRegistrarionCode,
    activate
}