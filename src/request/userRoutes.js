// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = (db)=>{
    const sql = `INSERT INTO contact (name,email,message) VALUES('${name}', '${email}', '${message}')`;
    db.query(sql, (err, result)=> {
      if(err) {
        throw err;
      }
      if(!err){
        console.log(result);
      }
    });
}