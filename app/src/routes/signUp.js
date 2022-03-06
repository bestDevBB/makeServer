"use strict";

const express = require("express");
const router = express.Router();

const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.info("GET \'/signup\' 회원가입 화면으로 이동");
    res.send('<h3>Sign Up Page!👀</h3>');
});

module.exports = router;
