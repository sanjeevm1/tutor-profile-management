
const {Sequelize} = require('sequelize');
require("dotenv").config();

const db = new Sequelize(process.env.DB_URL);

try{
    db.authenticate();
    console.log("DB connected");
}
catch(err){
    console.log("error")
}

module.exports=db;
