const express = require('express');
const userController = require('../controllers/user/index.controller');
const { authUser } = require('../middlewares/security/index.middleware');
const { userExist } = require('../middlewares/user/index.middleware');

const router = express.Router();

router.post('/users/register', userController.register);
router.get('/users/validate/:registrationCode', userController.validate);
router.post('/users/login', userController.login);
router.get('/users/profile', authUser, userExist, userController.profile);
router.get('/users/profile/:userId', userExist, userController.publicProfile);

router.put('/users/avatar', authUser, userExist, userController.editAvatar);

module.exports = router;