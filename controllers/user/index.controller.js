const register = require('./register.controller');
const validate = require('./validate.controller');
const login = require('./login.controller');
const profile = require('./profile.controller');
const publicProfile = require('./publicProfile.controller');

module.exports = {
    register,
    validate,
    login,
    profile,
    publicProfile,
};