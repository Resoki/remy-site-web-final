const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port)
console.log(`Listening ${port}`)
const mysql  = require('mysql');

const db = mysql.createConnection({
  host     : 'eu-cdbr-west-03.cleardb.net',
  user     : 'b69ef91eba2cc7',
  password : '5e9fc496',
  database : 'heroku_c4c47c6c7b2fa8c'
});

const connectDb = async () => {
  await db.connect(()=> {
    console.log('Connected a la bdd !');
  });
  setInterval(async () => {
    await db.query('SELECT 1', (err, result)=> {
      if(err){
         throw err;
      }
      console.log(result);
    });
  }, 5000);
};

connectDb()