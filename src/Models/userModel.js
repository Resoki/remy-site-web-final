// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = (_db)=>{
  db = _db;
  return userModel;
}

class userModel{
  static insertContact(req) {
      return db.query('INSERT into contact (name, email, message) VALUES (?,?, ?)', [req.body.name, req.body.email, req.body.message])
              .then((response)=>{
                  return response
              })
              .catch((err)=>{
                  return err
              })
  }


}