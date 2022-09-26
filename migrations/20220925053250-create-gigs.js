'use strict';
const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize')
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('gigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      technologies: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('gigs');
  }
};