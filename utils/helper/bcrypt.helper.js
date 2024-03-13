const { genSaltSync, hashSync, compareSync } = require("bcrypt");

module.exports = {
  hash: ( data ) => {
    try {
      const salt = genSaltSync(10);
      return hashSync(data, salt);
    } catch (error) {
      throw new Error("Bcrypt Hash data error: " + error.message);
    }
  },
  compare: ( data, data_hash ) => {
    try {
      return compareSync(data, data_hash);
    } catch (error) {
      throw new Error("Bcrypt Compare data error: " + error.message);
    }
  },
};