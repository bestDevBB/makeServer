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