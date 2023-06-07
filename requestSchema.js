
const Ajv = require("ajv")

const ajv = new Ajv();

ajv.addFormat("date",{
    type:"string",
    validate:(data)=>{
        return !isNaN(new Date(data))
    }
});

ajv.addFormat("emailId",{
    type:"string",
    validate:(data)=>{
        return /[a-z0-9\.]+(@)[a-z\.]+/.test(data);
    }
})

ajv.addFormat("mobileNo",{
    type:"string",
    validate:(data)=>{
        return /[0-9]{10,10}/.test(data);
    }
})

ajv.addFormat("userType",{
    type:"string",
    validate:(data)=>{
        return /^(trainer|user)$/.test(data);
    }
})

const signUp = {

    type:"object",
    properties:{
        name:{type:"string"},
        type:{type:"string",format:"userType"},
        emailId:{type:"string",format:"emailId"},
        password:{type:"string"},
        dob:{type:"string",format:"date"},
        mobileNo:{type:"string",format:"mobileNo"}
    },
    required:["name","type","emailId","password","dob","mobileNo"],
    additionalProperties:false
}

const login={

    type:"object",
    properties:{
        emailId:{
            type:"string",
            format:"emailId"
        },
        password:{
            type:"string"
        }
    },
    required:["emailId","password"],
    additionalProperties:false
}

module.exports.isValidSignUp = ajv.compile(signUp)
module.exports.isValidLogin = ajv.compile(login)