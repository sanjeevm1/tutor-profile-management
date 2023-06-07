
const User = require("../model/User.js");
const { Op } = require("sequelize");
const { hashPassWord, isValidPassword } = require("../../util/hashing.js");


async function getUserId(emailId,password){


    let user = await User.findOne({
        where:{
            [Op.and]:{emailId:emailId}
        }
    })

    if(user==null || !await isValidPassword(password,user.password)) return null;
    return user.id;
    
}

module.exports.getUserId = getUserId;