const express = require('express');
const mysql = require('mysql');
const app = express();

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rahul",
    database:"test"
});
db.connect((err)=>{
    if(!err) return console.log("connected");
    return console.log(err);
});
app.get('/',(req,res)=>{
    res.send("i am from backend");
})

app.get("/books",(req,res)=>{
    const allbooks="SELECT * FROM books";
    
    db.query(allbooks,(err,data)=>{
        if(err) return res.json("something is wrong"+err);
        return res.json(data);
        // console.log(data);
    });
})
const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
})