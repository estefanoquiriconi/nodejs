const express = require('express');
const userController = require('../controllers/user/index.controller');
const router = express.Router();

router.get('/users/hola', userController.saludar);
router.get('/users/chau', userController.despedir);

module.exports = router;