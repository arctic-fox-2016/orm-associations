"use strict"

var model = require('./models/index');

function startSimulationStudent(){
  model.Student.findAll().then(function(students){ //VIEW DATA
    console.log("Data original")
    for(var i=0;i<students.length;i++){
      console.log(students[i].name + " " + students[i].age + " " + students[i].email + " " + students[i].phone)
    }
  }).then(function(){
    return model.Student.bulkCreate([ //CREATE DATA
      { name: 'Tevin', age: 52, email:'hai@hai.hai', phone:'081242' },
      { name: 'Ini Aku', age: 41, email:'hai@hai.hai', phone:'025172' },
      { name: 'Ini Bukan Gue', age: 101, email:'hai@hai.hai', phone:'039238' }
    ])
  }).then(function(){
    return model.Student.findAll();
  }).then(function(students1){
    console.log("Data setelah diinsert -- setelah ditambahkan 3 row baru")
    for(var i=0;i<students1.length;i++){
      console.log(students1[i].name + " " + students1[i].age + " " + students1[i].email + " " + students1[i].phone)
    }
  }).then(function(){
    return model.Student.destroy({ //DELETE DATA
      where: { email: 'hai@hai.hai' },
      truncate: true
    })
  }).then(function(){
    return model.Student.findAll();
  }).then(function(students2){
    console.log("Data setelah delete -- semua row dengan email 'hai@hai.hai' dihapus")
    for(var i=0;i<students2.length;i++){
      console.log(students2[i].name + " " + students2[i].age + " " + students2[i].email + " " + students2[i].phone)
    }
  }).then(function() {
    return model.Student.update( //UPDATE DATA
      { age: 2000 },
      { where: { email: 'te@te.te' }}
    )
  }).then(function(){
    return model.Student.findAll();
  }).then(function(students3){
    console.log("Data setelah update -- age jadi 2000")
    for(var i=0;i<students3.length;i++){
      console.log(students3[i].name + " " + students3[i].age + " " + students3[i].email + " " + students3[i].phone)
    }
  })
}

startSimulationStudent()
