
const User = require("../model/User.js");

async function addUser(userDetails){

    try{
        await User.create(userDetails);
        return true;
    }
    catch(err){
        console.log(err);
        return false;
    }
}

module.exports.addUser = addUser;