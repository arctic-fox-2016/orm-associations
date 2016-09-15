"use strict"

let model = require("./models/index")

//select all records
model.Students
  .findAll().then(function(users){
      console.log(users)
    })

//RELEASE 2
// model.Students.findById(1).then(function(user) {
//   console.log("====================================");
//   console.log("Contoh Function Kembalikan Full Name");
//   console.log(user.first_name + ' ' +user.last_name);
// }).then()

//RELEASE 3
model.Students.build({first_name: 'ARI',last_name: 'ADIPRANA',email:'aro@asdas.com'}).save()

// INSERT DUMMY DULU
//model.Students.build({first_name: 'ARI',last_name: 'ADIPRANA', dob: new Date('December 25, 2000 23:15:00'), email: 'ari.adiprana1@gmail.com',nopol:'7302342342345813'}).save()

//model.Students.destroy({where: {first_name:'ARI'}})
