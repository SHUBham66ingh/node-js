
const fs=require("fs");

function logReqRes(filename)
{
    return (req,res,next)=>{
 fs.appendFile(filename , `\n${req.ip} :${req.method}: ${req.path}`,(err,data)=>{
     next();
          }
        )  
    }
}

module.exports ={
    logReqRes,
}