// eslint-disable-next-line @typescript-eslint/no-var-requires
const mysql  = require('mysql');

const db = mysql.createConnection({
  host     : 'eu-cdbr-west-03.cleardb.net',
  user     : 'b69ef91eba2cc7',
  password : '5e9fc496',
  database : 'heroku_c4c47c6c7b2fa8c'
});

export const connectDb = async (): Promise<void> => {
  await db.connect();
  setInterval(async () => {
    await db.query('SELECT 1', (err: any, result: any)=> {
      if(err){
         throw err;
      }
      console.log(result);
    });
  }, 5000);
};

export const postContact = (name: string, email: string, message: string): void =>{
  void connectDb();
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


