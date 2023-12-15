const express = require('express');
const userController = require('../controllers/user/index.controller');

const router = express.Router();

router.post('/users/register', userController.register);
router.get('/users/validate/:registrationCode', userController.validate);

module.exports = router;