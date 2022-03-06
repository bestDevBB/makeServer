<<<<<<< HEAD
"user strict";

// const { Op } = require('sequelize');
const { User } = require('../models/user.js');

const userDao = {
    // 로그인을 위한 User 조회
    selectUser(params) {
        return new Promise((resolve, reject) => {
            User.findOne({
                attributes: ['userId', 'userPw'],
                where: { userId: params },
                raw: true
            }).then((result) => {
                console.log(result);
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    // 등록 / 회원가입
    insertUser(params) {
        return new Promise((resolve, reject) => {
            User.create(params)
            .then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    }
};

// module.exports = userDao;
module.exports = userDao;
=======
"use strict";

const { Op } = require('sequelize');
const { User } = require('../models/index.js');

const dao = {

  // insert
  async insertUser(params) {
    try {
      await User.create(params);
      return params;
    } catch(err) {
      return err;
    };
  }
}
>>>>>>> dae7ab200864ee11604ecda1119a83eab23a647c
