/* User Table Model */


const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true
            },
            user_pw: {
                type: Sequelize.STRING(15),
                allowNull: false
            },
            salt: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            user_name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            user_email: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            user_phonenumber: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            user_birth: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            user_zip: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            user_address1: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            user_address2: {
                type: Sequelize.STRING(50),
                allowNull: false,
            }
        }, {
            sequelize, // Database Connection
            // underscored: true, // true: underscored, false: camelCase
            underscored: true, // true: underscored, false: camelCase
            timestamp: true, // createAt, updatedAt
            modelName: 'User',
            tableName: 'Users',
            paranoid: true, // deletedAt
            charset: "utf8",
            collate: "utf8_general_ci"
        });
    }
    static associate(db) {
        db.User.hasMany();
    };
};