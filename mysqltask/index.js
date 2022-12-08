const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rahul",
    database: "employee"
});
// const initialTime = new Date().getMilliseconds();
// console.log(`Initial Time = ${initialTime} ms`);
db.connect((err) => {
    if (!err) return console.log("connected to mysql>employee database");
    return console.log(err);
});

// const timeAfterdbConnection = new Date().getMilliseconds()-initialTime;
// console.log(` Time After dbConnection = ${timeAfterdbConnection} ms`);

app.use(express.json());

// for inserting new employee data
app.post("/createEmployee", (req, res) => {
    const q = "INSERT INTO employee(`name`,`surname`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.surname
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.status(400).json("something is wrong" + err);
        return res.status(200).json("New Employee record inserted in the employee table");
    })
});
// for inserting employee details data
app.post("/empdetails", (req, res) => {
    const q = "INSERT INTO empdetails(`gender`,`department`,`salary`,`age`,`empcode`) VALUES (?)"
    const values = [
        req.body.gender,
        req.body.department,
        req.body.salary,
        req.body.age,
        req.body.empcode
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.status(400).json("something is wrong" + err);
        return res.status(200).json(" employee record inserted in the empdetails table");
    })
});

//------------------ using for loop
app.get("/alldetails", (req, res) => {
    const initialTime = new Date().getMilliseconds();

    const inApi_initialTime = new Date().getMilliseconds()-initialTime;
    console.log(`Inside Api Initial Time = ${inApi_initialTime} ms`);
    db.query(`SELECT empcode FROM employee`, (err, data) => {
        let output = []
        if (err) return res.status(400).json("something is wrong" + err);
        else {
            const result = data.map(item => {
                return item.empcode;
            })
            console.log(result);
            const startLoop = new Date().getMilliseconds()-initialTime;
            console.log(`start loop Time = ${startLoop} ms`);
            for (let i = 0; i < result.length; i++) {
                db.query(`select * from empdetails where id="${result[i]}"`, (err, data) => {
                    if (err) {
                        return res.status(400).json("something is wrong" + err);
                    } else {

                        output.push(data)
                        // console.log(`${i}========= ${output}`);
                        // console.log(`${i} === ${result.length - 1}`);
                        if (i === result.length - 1) {
                            // console.log("output ", output);
                            res.status(200).json(output);
                            //time calculate
                            const endLoop = new Date().getMilliseconds()-initialTime;
                            console.log(`end loop Time = ${endLoop} ms`);
                        }
                    }
                })

            }//for finish
        }
    })
})

//-----------------------------promise.all()
/** 
app.get("/searchWithPromise", (req, res) => {
    db.query(`SELECT empcode FROM employee`, (err, data) => {
        let output = []
        if (err) return res.status(400).json("something is wrong" + err);
        else {
            Promise.allSettled(
                data.map((item)=> {
                    let id = item.empcode;
                    console.log(id);
                    db.query(`select * from empdetails where id="${id}"`,(err,result)=>{
                        if (err) {
                            return res.status(400).json("something is wrong" + err);
                        }else{
                            return result;
                        }  
                       
                    })
                })
              ).then(promises => {
                promises.forEach(promise=>{
                    // console.log(element);
                   output.push(promise);
                //    console.log(`${output.length} ===${data.length}`);
                   if(output.length===data.length)
                    // console.log(output);
                    return res.status(200).json(output);
                })
              })

        }
    })
})
*/
//------------
function returnDBData(empCode) {
   return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM empdetails WHERE empcode="${empCode}"`, (err, data) => {
            if (err) { reject(err)} else { resolve(data)}
        })//query close
    }) //promise colse
}
//  console.log(returnDBData(4));

app.get("/searchWithPromise", (req, res) => {
    const initialTime = new Date().getMilliseconds();

    const inApi_initialTime = new Date().getMilliseconds()-initialTime;
    console.log(`Inside Api Initial Time = ${inApi_initialTime} ms`);
    db.query(`SELECT empcode FROM employee`, (err, data) => {
        if (err) return res.status(400).json("something is wrong" + err);
        else {
            const queryTime= new Date().getMilliseconds()-initialTime;
            console.log(`Query time = ${queryTime} ms`);
            const promises = data.map(item => {
                let id = item.empcode;
                // console.log(id)
                return returnDBData(id);
                
            })
           
            // console.log(promises);
            Promise.allSettled([...promises]).then((promise)=>{
                res.status(200).json(promise);
                const afterResolvingPromise= new Date().getMilliseconds()-initialTime;
               console.log(`After Resolving the promises = ${afterResolvingPromise} ms`);
             }).catch(err=>{
                res.json(err)
            });
           
             /** 
            Promise.all([...promises]).then((promise)=>{
                res.status(200).json(promise);
             }).catch(err=>{
                res.json(err)
            }) */
        }
        const endTime=new Date().getMilliseconds()-initialTime;
            console.log(`endTime = ${endTime} ms`);

    })
})



const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Server listening on PORT http://localhost:${PORT}/`);
});