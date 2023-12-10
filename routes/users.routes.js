const express = require('express');
const userController = require('../controllers/user/index.controller');
const securityMiddleware = require('../middlewares/security/primer.middleware');

const router = express.Router();

router.get('/users/hola', securityMiddleware, userController.saludar);
router.get('/users/chau', securityMiddleware, userController.despedir);
router.post('users/register', userController.register);

module.exports = router;