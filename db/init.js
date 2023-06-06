
const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://profile_n8qp_user:RwndJaNjbYigFvllSUQko4cJzvXpxnvk@dpg-chu901e7avj345bm2i5g-a.oregon-postgres.render.com/profile_n8qp?sslmode=no-verify");

try{
    db.authenticate();
    console.log("DB connected");
}
catch(err){
    console.log("error")
}

module.exports=db;
