const http = require('http');

const server =http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("I  am home page");
    }else if(req.url=='/about'){
        res.end("I am about page");
    }else if(req.url=='/contact'){
        res.end("I am contact page");
    }else{
        res.end("page not found")
    }
});
const PORT=8000;
const localhost="127.0.0.1";
server.listen(PORT,localhost,()=>{
    console.log(`server is listening http://${localhost}:${PORT}/`);
});