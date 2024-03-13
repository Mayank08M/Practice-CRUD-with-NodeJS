require("dotenv").config();
module.exports = {
  local: {
    username: "root",
    password: "Mayank0806",
    database: "crud",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
      bigNumberStrings: true,
    },
    logging: false,
    define: {
      freezeTableName: true,
    },
  },
};
