const server = require("./server.js");

const app = require("./server.js");
require("./db/model/User.js");
require("./db/model/Education.js");
require("./db/model/Portfolio.js");

app.use((req,res,next)=>{
    require("./routes/signup.js");
    next();
})
