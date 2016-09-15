'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: {
          type: DataTypes.INTEGER,
          validate: {
            min: 5
          }
        },
        phone: {
          type: DataTypes.STRING,
          validate: {
            isNumeric: "Tidak sesuai dengan format nomor telepon",
            len: {
              args: [10, 12],
              msg: "Masukan nomor telepon dalam jangkauan 10-12 digit"
            }
          }
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true
          }
        }
      },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};
