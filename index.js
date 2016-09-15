"use strict"

var faker = require('Faker')
var model = require('./models')

// for (var i = 0; i < 5; i++) {
//   model.Teachers.create({
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     phone: '081234567890'
//   })
// }
//
// for (var i = 0; i < 15; i++) {
//   model.Students.create({
//     first_name: faker.name.firstName(),
//     last_name: faker.name.lastName(),
//     gender: "male",
//     birthday: faker.date.past(),
//     email: faker.internet.email(),
//     phone: "081234567890",
//     TeacherId: Math.floor(Math.random() * 5) + 1
//   })
// }

model.Students.findAll({
    include: [{
      model: model.Teachers
    }],
    where: {
      TeacherId: 1
    }
  }).then(function (result) {
    process.stdout.write(`${result[0].dataValues.Teacher.dataValues.name} has students:\n`)
    result.forEach((val, idx) => {

      console.log(`${idx+1}. ${val.dataValues.first_name}`)
    })
  })
  // model.Teachers.findAll({
  //
  // })
