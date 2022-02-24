#!/usr/bin/env node
/* eslint-disable */
"use strict";

const app = require('../app.js');
const logger = require('../src/config/logger.js')

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버 실행 중...`);
});