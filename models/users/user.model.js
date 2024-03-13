const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class users extends Model { }
  users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fullname: {
        type: DataTypes.STRING
      },
      profileimage: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    { sequelize, tableName: `users`, timestamps: true }
  );

  return users
}