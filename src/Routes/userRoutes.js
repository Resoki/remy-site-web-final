
module.exports = (app, db)=>{
    const userModel = require('../Models/userModel')(db);
    app.post('/post/contact', async (req,res)=>{
	    let insert = await userModel.insertContact(req);
		//si il y a une erreur
	    if(insert.code){
	        res.json({status: 500, err: insert})
	    }
	    //sinon
	    res.json({status: 200, insert: insert})
	})
}