"use strict"

let faker = require("faker")
let model = require("./models/index")
let repl = require("repl")
let Sequelize = require("sequelize")


// model.Student.create({first_name: "Halos", age:10, phone: "013415801348", email: "unieuqdfkajlaaaa@gmail.com", address: "jl jalan"})
// // // // model.Student.create({first_name: "lo", last_name: "Jas", age:20, phone: "01543801348", email: "uieuq@gmail.com"})
model.Student.create({first_name: "Ha", age:12, phone: "013415801348", email: "unieuqdfkajlaa@gmail.com", address: "jl jalan", TeacherId: 15})
model.Student.create({first_name: "Halos", age:13, phone: "01323415801348", email: "unieuqdfkajlaa@gmail.com", address: "jl jalan", TeacherId: 15})
model.Student.create({first_name: "Has", age:14, phone: "013415834201348", email: "unieuqdfaaa@gmail.com", address: "jl jalan", TeacherId: 15})

let getName = function(){
  model.Student.findAll().then(function(students){
    let string = []
    for(let i in students){
      console.log(students[i].first_name)
    }
  })
}

let getAge = function(){
  model.Student.findAll().then(function(students){
    let string = []
    for(let i in students){
      console.log(students[i].first_name+" berumur "+ students[i].age)
    }
  })
}

model.Teacher.destroy({where:{id: 15}})

let replServer = repl.start({prompt:">"})
replServer.context.getAge = getAge
