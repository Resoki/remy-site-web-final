var express = require('express');
var app = express();
const mysql = require('promise-mysql');
var bodyParser = require('body-parser')


const cors = require('cors');
app.use(cors());

//process.env.HOST.. = variable sur heroku
const host = process.env.HOST || 'localhost';
const user = process.env.USER || 'root';
const password = process.env.PASSWORD || '';
const port = '3306'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



const userRoutes = require('./src/request/userRoutes');
app.use(express.static(__dirname + '/public'));


mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    port: port
}).then((db)=>{
    

// respond with "hello world" when a GET request is made to the homepage
    console.log('connecté');
    app.get('/', function(req, res) {
        res.json({status: 200, msg: 'ok'});
        setInterval(async () => {
          await db.query('SELECT 1', (err, result)=> {
            if(err){
               throw err;
            }
            console.log(result);
          });
        }, 5000);
      })
      userRoutes(db);
})



const PORT = process.env.PORT || 9000;
app.listen(PORT, function(err){
    console.log('listen port ' + PORT);
})


const connectDb = async () => {
  await db.connect(()=> {
    console.log('Connected a la bdd !');
  });
  userRoutes(app, db)
  setInterval(async () => {
    await db.query('SELECT 1', (err, result)=> {
      if(err){
         throw err;
      }
      console.log(result);
    });
  }, 5000);
};
