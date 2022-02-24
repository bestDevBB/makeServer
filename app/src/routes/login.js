/* eslint-disable */
"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.info("GET \'/login\' \'로그인 화면으로 이동\'");
    res.send('<h3>Login Page❤</h3>');
});

module.exports = router;