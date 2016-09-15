'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { msg: "Email must follow the correct format - ari custom message" }
          ,isUnique: function(value,next){
            Students.find({
              where: {email: value},
              attributes: ['id']
            })
                .done(function(error,user){
                  if(error)
                    return next('Email is already in use')
                  next()
                })
          }
        }
    }
    ,dob: {
        type: DataTypes.DATE,
        validate: {
          isCekUmur: function(value){
            if(new Date().getFullYear() - value.getFullYear()<5)
              throw new Error('Anda masih kurang cukup umur, maaf.............')
          }
        }
    }

    ,nopol: {
        type: DataTypes.STRING,
        validate: {
          isCekPanjang: function(value){
            if(value.length<10)
              throw new Error('No telpon anda kurang panjang, harusnya minimal 10 angka')
          }
        }
    }
  }, {
    classMethods: {
      associate: function() {
        // associations can be defined here
      }
    }
  });
  return Students;
};
