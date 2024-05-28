const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log =`${Date.now()}: ${req.url}New Req Received\n`;
fs.appendFile("log.txt", log , (err,data)=>{
    switch(req.url)
    {
        case'/': res.end('home page'); 
        break;
        case'/about':res.end("i am shubham singh");
        break;
        default:
            res.end("404 not found");
    }
    
});
});


myServer.listen(8004 , ()=> console.log("server started"));

