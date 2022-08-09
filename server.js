const express = require('express')
const app = express()

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD
}).then(async ()=> {
  await connection.connect();
  setInterval(async()=> {
    await connection.query('SELECT 1', function(err, rows, fields) {
      if (err) throw err;
      console.log('The solution is: ', rows[0].solution);
    });
  },4000)
})

app.get('/', ()=> {
  console.log('get /')
})