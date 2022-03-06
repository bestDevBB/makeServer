"use strict";

const express = require('express');
const router = express.Router();

const mainRouter = require('./main.js');
const loginRouter = require('./login.js');
const signUpRouter = require('./signUp.js');

router.use('/', mainRouter);
router.use('/login', loginRouter);
router.use('/signup', signUpRouter);

module.exports = router;