const express = require('express');
const mysql = require('mysql');
const app = express();

//alter user 'root'@'localhost'identified with mysql_native_password by 'rahul';
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rahul",
    database:"user"
});
db.connect((err)=>{
    if(!err) return console.log("connected to mysql db");
    return console.log(err);
});

//to send the json data we have to use express middleware
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("i am from backend");
})


// register new user
app.post("/registration",(req,res)=>{
    const q="INSERT INTO user_table(`firstname`,`lastname`,`username`,`password`,`email`,`phone`,`created`) VALUES (?)"
    const values=[
        req.body.firstname,
        req.body.lastname,
       req.body.username,
       req.body.password,
       req.body.email,
       req.body.phone,
       req.body.created
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json("book data inserted into the table"); 
    })
});


const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
});