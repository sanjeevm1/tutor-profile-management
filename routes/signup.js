
const { addUser } = require("../db/CRUD/addUser.js");
const User = require("../db/model/User.js");
const { isEmailExist } = require("../db/search/user.js");
const server = require("../server.js");
const {isValidSignUp} = require("../requestSchema.js");
const { hashPassWord } = require("../util/hashing.js");


server.post("/v1/user",async(req,res)=>{

    console.log(JSON.stringify(req.body));

    if(!isValidSignUp(req.body)){
        res.status(400).send("Input entities are not valid");
    }

    else if(!await isEmailExist(req.body.emailId)){

        req.body.password = await hashPassWord(req.body.password);
        
        let isInserted = await addUser(req.body);

        if(isInserted){
            res.status(200).send("Added Successfully");
        }
        
        else
        res.status(500).send("Internal Server error");
    }

    else
    res.status(400).send("Email already exist");
    
});