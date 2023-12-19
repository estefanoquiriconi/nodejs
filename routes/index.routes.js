const express = require('express');
const userRouter = require('./users.routes')
const entryRouter = require('./entry.routes');

const router = express.Router();

router.use(userRouter);
router.use(entryRouter);

module.exports = router;