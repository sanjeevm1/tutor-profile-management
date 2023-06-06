
const db = require("../init.js");
const {DataTypes,Sequelize} = require("sequelize")

const User = db.define("User",{

    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue:Sequelize.UUIDV4
    },
    name:{
        type:DataTypes.STRING
    },
    password:{
       type:DataTypes.STRING
    },
    emailId:{
        type:DataTypes.STRING,
        validate:{isEmail:true}
    },
    dob:{
        type:DataTypes.DATEONLY
    },
    mobileNo:{
        type:DataTypes.STRING,
        validate:{is:/[0-9]{10,10}/}
    },
    type:{
        type:DataTypes.STRING,
        validate:{is:/^(trainer|user)$/}
    }

},{
    freezeTableName:true
});

User.sync({alter:true})

module.exports=User