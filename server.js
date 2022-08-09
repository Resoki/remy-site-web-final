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
const database = process.env.DATABASE || 'portfolio_db'
const port = '3306'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const userRoutes = require('./src/Routes/userRoutes');
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
        res.json({status: 200, msg: 'ok'})
      })
    
      setInterval(()=> {
        db.query('SELECT 1', (res,err)=> {
          if(err){
            return err
          }
          console.log(res)
        })
      }, 4000)

    userRoutes(app, db)
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(err){
    console.log('listen port ' + PORT);
})