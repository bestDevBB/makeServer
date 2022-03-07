"use strict";

const { sequelize } = require('./connection.js');
const User = require('./user.js');
const Car = require('./car.js');
const Review = require('./review.js');

const db = {};

db.sequelize = sequelize;

// model
db.User = User;
db.Car = Car;
db.Review = Review;

// model init
User.init(sequelize);
Car.init(sequelize);
Review.init(sequelize);

User.associate(db);
Car.associate(db);
Review.associate(db);

module.exports = db;