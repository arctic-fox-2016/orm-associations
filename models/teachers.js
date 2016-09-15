'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teachers;
};