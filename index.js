const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req , res)=>{
    const log =`${Date.now()}:New Req Received\n`;
fs.appendFile("log.txt", log , (err,data)=>{
    res.end('hello from server again');  
});
});

myServer.listen(8004 , ()=> console.log("server started"));

