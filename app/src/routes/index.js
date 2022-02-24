"use strict";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('메인 페이지!');
})

module.exports = router;