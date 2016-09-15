"use strict"

 let model = require("./models/index")




// model.Students.findById(1).then(function(user) {
//   console.log("Contoh Memunculkan Full Name");
//   console.log(user.first_name + ' ' +user.last_name);
// })
//
// model.Students.findById(1).then(function(user) {
//   console.log("Contoh Memunculkan Umur ");
//   console.log(user.age);
// })
//
model.Teacher.findById(1).then(function(user) {
   console.log("Contoh Memunculkan email ");
 console.log(user.email);
 })
//
// model.Students.findById(1).then(function(user) {
//   console.log("Contoh Memunculkan telepon ");
//   console.log(user.phone);
// })


//Buat isi data
 // model.Teacher
 //  //  .build({ name: 'TEVINSTEIN AMOS', phone:6281111111, email:"tevin@gmail.com" })
 //  //  .build({ name: 'IVAN GERARD', phone:6282222222, email:"ivan@gmail.com" })
 //   .build({ name: 'IMAM NUGRAHA', phone:6283333333, email:"imam@gmail.com" })
 //   .save()
 //
 //   model.Teacher
 //   .build({ name: 'ARI ADIPRANA', phone:6284444444, email:"ari@gmail.com" })
 //   .save()
 //
 //   model.Teacher
 //   .build({ name: 'ANDREW TANDIAWAN', phone:6285555555, email:"andrew@gmail.com" })
 //   .save()
 //   model.Teacher
 //   .build({ name: 'SEPTIANTO DIGA CHANDRA', phone:6286666666, email:"septianto@gmail.com" })
 //   .save()
 //
 //   model.Teacher
 //   .build({ name: 'AHYANA RIZKY', phone:6287777777, email:"ahyana@gmail.com" })
 //   .save()
 //
 //   model.Teacher
 //   .build({ name: 'SAHBANA LUBIS', phone:6288888888, email:"sahbana@gmail.com" })
 //   .save()
 //
 //   model.Teacher
 //   .build({ name: 'PETER RASWONO', phone:6289999999, email:"peter@gmail.com" })
 //
 //   .save()
 //     // you can now a
