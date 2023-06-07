
const hash = require("bcrypt");
const { uuid } = require("uuidv4");

async function hashPassWord(password){
     return await hash.hash(password,0);
}

function generateUserId(){
    return uuid();
}

async function isValidPassword(password,hashedPassword){
    return await hash.compare(password,hashedPassword);
}

module.exports.hashPassWord = hashPassWord;
module.exports.generateUserId = generateUserId;
module.exports.isValidPassword = isValidPassword;