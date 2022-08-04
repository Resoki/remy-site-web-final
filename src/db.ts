import mysql from 'mysql';
export const db = mysql.createConnection({
    host     : 'eu-cdbr-west-03.cleardb.net',
    user     : 'b69ef91eba2cc7',
    password : '5e9fc496',
    database : 'heroku_c4c47c6c7b2fa8c'
});


