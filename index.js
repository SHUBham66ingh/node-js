const http = require("http");
const express=require("express")
const app=express();


app.get('/' , (req,res)=>{
    return res.send("hello from home page");
})

app.get('/about' , (req,res)=>{
    return res.send("hello from About page"); 
})


// let myServer = http.createServer((req , res)=>{
//     if(req.url==="/favicon.ico") return res.end();
//     const log =`${Date.now()}:${req.method} ${req.url}New Req Received\n`;
//     const myUrl= url.parse(req.url,true);
  
// fs.appendFile("log.txt", log , (err,data)=>{
//     switch(myUrl.pathname)
//     {
//         case'/': res.end('home page'); 
//         break;
//         case'/about':
//         const username=myUrl.query.myname;
//         res.end(`hi,${username}`);
//         break;
//         default:
//             res.end("404 not found");
//     }
// });
// });

const myServer=http.createServer(app);
myServer.listen(8005 , ()=> console.log("server started"));

