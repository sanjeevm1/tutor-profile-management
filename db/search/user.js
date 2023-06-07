
const { hashPassWord } = require("../../util/hashing.js");
const User = require("../model/User.js");

async function isEmailExist(email){

    let user = await User.findOne({
        where:{
            emailId:email
        }
    })

    if(user==null) return false;
    return true;
 
}



module.exports.isEmailExist=isEmailExist;