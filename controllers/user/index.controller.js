const register = require('./register.controller');
const validate = require('./validate.controller');
const login = require('./login.controller');
const profile = require('./profile.controller');
const publicProfile = require('./publicProfile.controller');
const editAvatar = require('./editAvatar.controller');
const passwordRecover = require('./passwordRecover.controller');
const passwordUpdateByRecover = require('./passwordUpdateByRecover.controller.js');

module.exports = {
    register,
    validate,
    login,
    profile,
    publicProfile,
    editAvatar,
    passwordRecover,
    passwordUpdateByRecover,
};