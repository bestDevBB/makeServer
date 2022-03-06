"use strict";

const express = require('express');
const router = express.Router();

const logger = require('../config/logger.js');

// const cookieConfig = {
//     httpOnly: true,
//     maxAge: 1000000,
//     signed: true
// }

router.get('/', (req, res) => {
    logger.info("GET \'/\' 홈 화면으로 이동");
    // res.cookie('Set-Cookie', 'mycookie=test', cookieConfig);
    res.send('<h3>Main Page😘</h3>');
    // console.log(req.url, req.headers.cookie);
});

module.exports = router;