/* eslint-disable */
"use strict";

const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

const logger = require('../config/logger.js');

router.get('/', (req, res) => {
    logger.info("GET \'/login\' 로그인 화면으로 이동");
    res.send('<h3>Login Page❤</h3>');
});

// const cookieConfig = {
//     httpOnly: true,
//     maxAge: 1000000,
//     signed: true
// }

router.post('/', async (req, res) => {
    // res.cookie('Post-cookie', 'bbcookie=test', cookieConfig);
    // console.log(req.url, req.cookies);
    // console.log(req.headers.cookie);

    // const { userId, userPw } = req.body;
    // const client = req.body;
    const client = {
         userId: req.body.userId,
         userPw: req.body.userPw
    }
    console.log("req.body: ", req.body);
    try {
        const user = await User.findOne({
            attributes: [ 'userId', 'userPw' ],
            where: { userId: client.userId },
            raw: true
        });
        console.log("user: ", user);

        if(user) {
            if(user.userId === client.userId && user.userPw === client.userPw) {
                return res.json({ success: true, msg: "로그인 성공!" });
            }
            return res.json({ success: false, msg: "비밀번호가 틀렸습니다."});
        }
        return res.json({ success: false, msg: "존재하지 않는 아이디입니다."});
    } catch(err) {
        console.log(err);
        return res.json({ success: false, msg: err });
    };
});

module.exports = router;