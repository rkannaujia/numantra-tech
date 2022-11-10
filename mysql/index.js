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
    if(!err) return console.log("connected to mysql db");
    return console.log(err);
});

//to send the json data we have to use express middleware
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("i am from backend");
})
//for fetching all the books data
app.get("/books",(req,res)=>{
    const q="SELECT * FROM books";
     db.query(q,(err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(data);
        // console.log(data);
    });
});

// for inserting new books data
app.post("/books",(req,res)=>{
    const q="INSERT INTO books(`title`,`desc`,`cover`) VALUES (?)"
    const values=[
        req.body.title,
        req.body.desc,
       req.body.cover
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json("book data inserted into the table"); 
    })
});

//delete the book
app.delete('/books/:id',(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE id = ?"

    db.query(q,[bookId], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json("book  deleted from the table"); 
    })
})
const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
})