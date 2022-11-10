// 1: Create a folder named it Rahul
// 2: create a file in it named "bio.txt"  and data into it
//3: add more data into the file at the end of existing data
//4: read the data without getting the buffer data at first
//5: rename the file name to "mybio.txt" 

const fs =require('fs');

// fs.mkdirSync('rahul');

//fs.writeFileSync("bio.txt","I am the content of the file");


// fs.appendFileSync("bio.txt","I am additional content of the file");

// const data = fs.readFileSync('bio.txt','utf-8');
// console.log(data);

// fs.renameSync('bio.txt','mybio.txt');

// fs.unlinkSync('mybio.txt');

fs.rmdirSync('rahul');