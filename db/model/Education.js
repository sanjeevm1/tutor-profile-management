
const db = require('../init.js');
const {DataTypes} = require('sequelize');

const Education=db.define('Education',{

    trainerId:{
        type:DataTypes.UUID
    },
    education:{
        type:DataTypes.STRING
    }

},{
    freezeTableName:true
})

Education.sync();

module.exports=Education;