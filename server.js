var express = require('express');
var app = express();
const mysql = require('promise-mysql');

//process.env.HOST.. = variable sur heroku
const host = process.env.HOST || 'localhost';
const user = process.env.USER || 'root';
const password = process.env.PASSWORD || '';
const port = '3306'

const userRoutes = require('./src/Models/userModel');

app.use(express.static(path.join("/dist")));

mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    port: port
}).then((db)=>{
// respond with "hello world" when a GET request is made to the homepage
    console.log('connecté');
        setInterval(async () => {
          await db.query('SELECT 1', (err, result)=> {
            if(err){
               throw err;
            }
          });
        }, 5000);
      userRoutes(db);
})


const PORT = process.env.PORT || 9000;
app.listen(PORT, function(err){
    console.log('listen port ' + PORT);
})