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

// model.Students.findAll({
//
// })
model.Teachers.findAll({
  include: [{
    model: model.Students,
    where: {
      TeacherId: 3
    }
  }]
}).then(function (result) {
  result.forEach((val) => {
    console.log(val.dataValues.name);
  })
})
