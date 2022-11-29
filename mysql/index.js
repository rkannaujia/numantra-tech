const express = require('express');
const mysql = require('mysql');
const app = express();

//alter user 'root'@'localhost'identified with mysql_native_password by 'rahul';
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

//fetch book with id
app.get("/books/book/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="SELECT * FROM books WHERE id = ?";
    db.query(q,[bookId],(err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(data);
    })
})
// for inserting new books data
app.post("/books",(req,res)=>{
    const q="INSERT INTO books(`title`,`desc`,`cover`,`authorId`) VALUES (?)"
    const values=[
        req.body.title,
        req.body.desc,
       req.body.cover,
       req.body.authorId
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json("book data inserted into the table"); 
    })
});

//update the desc only of the book
app.patch('/books/book/:id',(req,res)=>{
const bookId=req.params.id;
const q= "UPDATE books SET `desc` = ? WHERE id = ?";
const newDesc=req.body.desc;
console.log(newDesc);
db.query(q,[newDesc,bookId], (err,data)=>{
    if(err) return res.status(400).json("Error while updating"+err);
    return res.status(200).json("desc updated successfully");
})
});

//update all detials  of the book
app.put('/books/book/:id',(req,res)=>{
    const bookId=req.params.id;
    const q= "UPDATE books SET `title`= ? ,`desc` = ?, `cover`= ? WHERE id = ?";
    const values=[
        req.body.title,
        req.body.desc,
       req.body.cover
    ];
    db.query(q,[...values,bookId], (err,data)=>{
        if(err) return res.status(400).json("Error while updating"+err);
        return res.status(200).json("book updated successfully");
    })
    });

//delete the book
app.delete('/books/:id',(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE id = ?";

    db.query(q,[bookId], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(" => book  deleted from the table"); 
    })
});

// author table manipulation

// for inserting new author data
app.post("/author",(req,res)=>{
    const q="INSERT INTO author(`authorName`,`gender`,`country`) VALUES (?)"
    const values=[
        req.body.authorName,
        req.body.gender,
       req.body.country
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json("author data inserted into the table"); 
    })
});

//delete the book
app.delete('/author/:id',(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM author WHERE id = ?";

    db.query(q,[bookId], (err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(" => author  deleted from the table"); 
    })
});

//for fetching all the author data
app.get("/author",(req,res)=>{
    const q="SELECT * FROM author";
     db.query(q,(err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(data);
        // console.log(data);
    });
});

//for fetching join data from author and books
app.get("/join",(req,res)=>{
    const q="SELECT * FROM author JOIN books  on books.authorId=author.id";
     db.query(q,(err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(data);
        // console.log(data);
    });
});

app.get("/innerjoin",(req,res)=>{
    const q="SELECT `title` ,`desc` FROM books inner JOIN author ON books.authorId = author.id ";
     db.query(q,(err,data)=>{
        if(err) return res.status(400).json("something is wrong"+err);
        return res.status(200).json(data);
        // console.log(data);
    });
});

const PORT=8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
});