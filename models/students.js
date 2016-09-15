'use strict';

module.exports = function (sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 15],
        is: /^[0-9]+$/i
      }
    },
    birthday: DataTypes.DATEONLY,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Students.belongsTo(models.Teachers, {
          onDelete: 'SET NULL'
        })
      },

      update: function (idx, newData) {
        this.update({
          first_name: newData.full_name,
          last_name: newData.last_name,
          gender: newData.gender,
          email: newData.email,
          phone: newData.phone,
          birthday: newData.birthday
        }, {
          where: {
            id: idx
          }
        })
      }
    }
  });
  return Students;
};
