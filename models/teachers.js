'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teachers;
};