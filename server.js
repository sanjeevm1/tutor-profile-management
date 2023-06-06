const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`port listened at ${process.env.PORT}`);
  }
});

module.exports = app;
