'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    age: {type: "STRING",
    validate:{
      min: 5,
      // msg: "Must be older than 5"
    }
  },

  phone: {type: "STRING",
  validate:{
    isNumeric: {msg:"phone must be numeric only"},
    isLong: function(value){
      if(value.length<10){
        throw new Error('Phone number must be longer than 10 digits')
      }
    }}
  },

  address: DataTypes.STRING,

  TeacherId: DataTypes.INTEGER,

  email: {type: "STRING",
  validate:{
    isEmail: {msg:"email must be in correct format"},
  }
  },
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
      Student.belongsTo(models.Teacher, {onDelete: 'SET NULL'})
    }
  }
});
return Student;
};
