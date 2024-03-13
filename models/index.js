"use strict";

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const config = require("../config")[env];

const db = {};

// console.log(config);

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

db.users = require('./users/user.model')(sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;