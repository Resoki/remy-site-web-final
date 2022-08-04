// eslint-disable-next-line @typescript-eslint/no-var-requires
import mysql from 'mysql';
const db = mysql.createConnection({
    host     : 'eu-cdbr-west-03.cleardb.net',
    user     : 'b69ef91eba2cc7',
    password : '5e9fc496',
    database : 'heroku_c4c47c6c7b2fa8c'
});

  
export const postContact = (name: string, email: string, message: string): void =>{
  const sql = `INSERT INTO contact (name,email,message) VALUES('${name}', '${email}', '${message}')`;
  db.query(sql, (err: any, result: any)=> {
    if(err) {
      throw err;
    }
    if(!err){
      console.log(result);
    }
  });
};


