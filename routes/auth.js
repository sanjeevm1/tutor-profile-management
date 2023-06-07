
const { addUser } = require("../db/CRUD/addUser.js");
const User = require("../db/model/User.js");
const { isEmailExist } = require("../db/search/user.js");
const server = require("../server.js");
const {isValidSignUp, isValidLogin} = require("../requestSchema.js");
const { hashPassWord, generateUserId } = require("../util/hashing.js");
const { generateToken } = require("../util/encrypt.js");
const { getUserId } = require("../db/CRUD/fetchUser.js");


server.post("/v1/user",async(req,res)=>{

    if(!isValidSignUp(req.body)){
        res.status(400).send("Input entities are not valid");
        return;
    }

    if(!await isEmailExist(req.body.emailId)){

        req.body.password = await hashPassWord(req.body.password);
        
        let userId = generateUserId();
        let isInserted = await addUser({...req.body,id:userId});

        if(isInserted){
            res.cookie("accessToken",generateToken(userId));
            res.status(200).send("Added successfully");
        }
        
        else
        res.status(500).send("Internal Server error");
    }

    else
    res.status(400).send("Email already exist");
    
});

server.post("/v1/login",async(req,res)=>{

    if(!isValidLogin(req.body)){
        res.status(400).send("Input entities are not valid");
        return;
    }

    let userId = await getUserId(req.body.emailId,req.body.password);

    if(userId==null){
        res.status(400).send("Invalid Username and password");
        return;
    }

    res.cookie("accessToken",generateToken(userId));
    res.status(200).send("login successfull");
    
})