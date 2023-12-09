const express = require('express');
const userRouter = require('./users.routes')
const productRouter = require('./product.routes');

const router = express.Router();

router.use(userRouter);
router.use(productRouter);

module.exports = router;