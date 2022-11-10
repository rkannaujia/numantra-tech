const fs =require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        server.on('request',(req,res) => {
            const rstream =fs.createReadStream('home.html');
            rstream.pipe(res);
        });   
    }
});
// server.on('request',(req,res) => {
//     const rstream =fs.createReadStream('home.html');
//     rstream.pipe(res);
// });
const PORT=8000;
const localhost="127.0.0.1";
server.listen(PORT,localhost,()=>{
    console.log(`server is listening http://${localhost}:${PORT}/`);
});