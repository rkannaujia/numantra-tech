const express = require('express');
const mongoose = require("mongoose");
const  dotenv = require("dotenv");
const Routes =require('./router/routes.js');
const app = express();
dotenv.config();


//for connection with cluster(mongo db)
const connect=()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to Monogodb Atlas Database");
    }).catch((err)=>{
        throw err
    });
}

app.use(express.json()); //global level middileware
app.use("/api", Routes); 

const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
  //call the method connect
  connect();
})