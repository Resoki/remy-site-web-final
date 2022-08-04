const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;
app.listen(port)
console.log(`Listening ${port}`)
import {db} from' ./src/db';

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

module.exports = {db}