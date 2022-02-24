"use strict";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const { sequelize } = require('./src/models/index.js');

const app = express();

const router = require('./src/routes/index.js');
const logger = require('./src/config/logger.js');

sequelize.sync({ force: false })
  .then(() => {
    logger.info("데이터베이스 연결 성공")
  })
  .catch((err) => {
    logger.error("연결 실패!");
    console.error("ERROR :", err);
  });

app.use('/', router);

module.exports = app;