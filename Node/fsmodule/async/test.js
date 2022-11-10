// 1: Create a folder named it Rahul
// 2: create a file in it named "bio.txt"  and data into it
//3: add more data into the file at the end of existing data
//4: read the data without getting the buffer data at first
//5: rename the file name to "mybio.txt" 
//6: now delete both the file and the folder

const fs = require('fs');

// fs.mkdir('rahul',(err)=>{
//     err ? console.log("there is already a folder with same name") : console.log("folder created");
// })

// fs.writeFile('./rahul/bio.txt',"I am the content of the file",(err)=>{
//     err ? console.log(err) : console.log("content added"); 
// })

// fs.readFile('./rahul/bio.txt','utf-8',(err,data)=>{
//     err ? console.log(err) : console.log(data);
// });

// fs.rename('./rahul/bio.txt','./rahul/mybio.txt',(err)=>{
//     err ? console.log(err) : console.log("file name updated");
// })

// fs.unlink('./rahul/mybio.txt',(err)=>{
//     err ? console.log(err) : console.log("file deleted"); 
// })

// fs.rmdir('rahul',(err)=>{
//     err ? console.log(err) : console.log("folder deleted");  
// })