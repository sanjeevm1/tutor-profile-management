
const hash = require("bcrypt");

async function hashPassWord(password){
     return await hash.hash(password,0);
}

module.exports.hashPassWord = hashPassWord;