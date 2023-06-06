
const db = require("../init.js");
const {DataTypes} = require("sequelize");

const Portfolio = db.define("Portfolio",{

    trainerId:{
        type:DataTypes.UUID
    },
    name:{
        type:DataTypes.STRING
    },
    link:{
        type:DataTypes.STRING,
        validate:{isUrl:true}
    }
});

Portfolio.sync();

module.exports=Portfolio