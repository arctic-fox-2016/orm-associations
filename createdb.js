"use strict"

const sqlite = require('sqlite3').verbose()
let file = 'db/students.db'
let db = new sqlite.Database(file)

// fs.open('db/students.db', 'wx', function (err, fd) {
//   fs.close(fd, function (err) {
//     // console.error("Ooopps, something happen! ", err)
//   })
// })
