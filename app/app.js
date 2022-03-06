"use strict";

const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

dotenv.config();
const { sequelize } = require('./src/models/index.js');

const app = express();

const router = require('./src/routes/index.js');
const logger = require('./src/config/logger.js');

sequelize.sync({ force: false })
  .then(() => {
    logger.info("데이터베이스 연결 성공");
  })
  .catch((err) => {
    logger.error("연결 실패!");
    console.error("ERROR :", err);
  });

// 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));
// app.use(cookieParser('some_secret_1234')); // cookieParser(secretKey, optionObj)

app.use('/', router);

module.exports = app;