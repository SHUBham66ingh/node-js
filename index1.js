const express=require('express');
const {connectMongoDb} = require('./connections')
const {logReqRes} = require('./middlewares')
const userRouter = require('./routes/user')
const app=express();
const PORT=8009;
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log('MongoDb connected!'))


app.use(express.urlencoded({extended:false}));

app.use(logReqRes("log.txt"));


app.use('/user' , userRouter);

app.listen(PORT , ()=>console.log(`server started at PORT : ${PORT}`))



   
   
   

