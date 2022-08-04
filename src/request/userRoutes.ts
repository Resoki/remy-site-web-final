// eslint-disable-next-line @typescript-eslint/no-var-requires
const {db} = require('../db');

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


