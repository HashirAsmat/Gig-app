'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

//config is the file where DATABASE name and it's other informations are stored , the information are useful to establish the connection.
const config = require(__dirname + '/../config/config.json')[env];

// const db = {};




// creating dataBase connection
let DataBase

//To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters.
 DataBase = new Sequelize(config.database, config.username, config.password, config);
//After connection is established by Sequelize class above takes information as an argument for the constructor to create connection, now we have obtained DataBase . dataBase is obtained after creating connection to it
// now we have access to actual DATABASE which is stored in variable -> DataBase.



// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     //here this foreach loop is making the [DataBase, Sequelize.DataTypes] variable accessible and global to all files.
//     const model = require(path.join(__dirname, file))(DataBase, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = DataBase;
// db.Sequelize = Sequelize;

module.exports = DataBase;
