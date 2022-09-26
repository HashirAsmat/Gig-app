
"use strict";
const moment = require("moment");
const dataBase = require("../models/index");
const {DataTypes} = require('sequelize');

  //we are defining the model Gigs for table gigs, the construction of model need table name and the table schema , thus the define method will take those information as parameter and will return a model which was specifically made on the base of table name gigs and the schema , that was passed in the parameter.
  const Gigs = dataBase.define("gigs", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    technologies: {
      type: DataTypes.STRING
    },
    budget: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }
  );
  Gigs.beforeCreate((gigs) => {
    gigs.dataValues.createdAt = moment().unix();
    gigs.dataValues.updatedAt = moment().unix();
  });
  Gigs.beforeUpdate((gigs) => {
    gigs.dataValues.updatedAt = moment().unix();
  });


 module.exports = Gigs;

