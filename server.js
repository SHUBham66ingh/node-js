const http = require('http');

const server = http.createServer((req , res)=>{
    if(req.url== '/hello')
        res.end('hello world');

    else if(req.url=='/welcome')
        res.end('welcome students')

    else 
    res.writeHead(404)
});

server.listen(8000,()=>{
    console.log('server started');
})