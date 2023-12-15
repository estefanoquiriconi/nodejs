const register = require('./register.service');
const getByUsernameOrEmail = require('./getByUsernameOrEmail.service');
const registerSendEmail = require('./registerSendEmail.service');



module.exports = {
    register,
    getByUsernameOrEmail,
    registerSendEmail
}