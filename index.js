"use strict"

let models = require("./models/index");
const Faker = require("Faker");

class System{
  static clearScreen(){
    let lines = process.stdout.getWindowSize()[1];
    for (let idx = 0; idx < lines; idx++) console.log("\r\n");
    return true;
  }
  static printSeparator(text){
    console.log(`\n=======================================\n${text}\n`);
    return true;
  }
  static printResult(){
    console.log(`\nResult:`);
    return true;
  }
}

System.clearScreen();
class Process{
  static release_one(){
    System.printSeparator("Release #1 - Create some test data for Teachers");
    console.log("> npm install Faker");

    function insert_teacher(idx){
      if(idx < 9){
        console.log(`> ... insert record #${idx+1} to Teachers`);
        models.Teacher.create({
          name:Faker.Name.findName(),
          email:Faker.Internet.email(),
          phone:Faker.PhoneNumber.phoneNumber()
        }).then(function(){
          insert_teacher(idx+1);
        });
      }
    }
    insert_teacher(0);
    console.log("> sequelize model:create --name Student --attributes name:string,email:string,phone:string");
    console.log("> create associations");
  }
  static release_nol(){
    System.printSeparator("Release #0 - Add a Teacher Model");
    console.log("> sequelize init");
    console.log("> sequelize model:create --name Teacher --attributes name:string,email:string,phone:string");
    console.log("> sequelize db:migrate");
    Process.release_one();
  }
}
Process.release_nol();
