'use strict';
module.exports = function (sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Teachers.hasMany(models.Students)
      }
    }
  });
  return Teachers;
};
