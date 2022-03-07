"use strict";

const Sequelize = require('sequelize');

module.exports = class Review extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      writer: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      }
    }, {
        sequelize, // Database Connection
        // underscored: true, // true: underscored, false: camelCase
        underscored: true, // true: underscored, false: camelCase
        timestamp: true, // createAt, updatedAt
        modelName: 'Review',
        tableName: 'Reviews',
        paranoid: true, // deletedAt
        charset: "utf8",
        collate: "utf8_general_ci"
    })
  }
  static associate(db) {
    db.Review.belongTo
  }
}