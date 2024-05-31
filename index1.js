const express=require('express');
const fs = require('fs')
const {connectMongoDb} = require('./connection')

const userRouter = require('./routes/user')
const app=express();
const PORT=8009;
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')


app.use(express.urlencoded({extended:false}))

app.use(( req,res,next)=>{
      fs.appendFile('log.txt' , `\n${req.ip} :${req.method}: ${req.path}`,(err,data)=>{
        next();
      }
    )  
})


app.use('/user' , userRouter);


   
   
   

