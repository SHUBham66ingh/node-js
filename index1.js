const express=require('express');
const fs = require('fs')
const users = require('./MOCK_DATA.json');
const mongoose = require("mongoose");

const app=express();
const PORT=8000;

mongoose.connect
("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=> console.log('mongoDb connected'))
.catch((err)=> console.log('mongo error' ,err))

// schema
const userSchema = new mongoose.Schema({
  fisrtName :{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:false,
  },
  email:{
    type:String,
     required:true,
     unique:true,
  },
  jobTitle:{
    type:String,
  },
  geneder:{
    type:String,
  },
},
{
  timestamps:true
}
);



const User=mongoose.model('user' ,userSchema);

app.use(express.urlencoded({extended:false}))

app.use(( req,res,next)=>{
      fs.appendFile('log.txt' , `\n${req.ip} :${req.method}: ${req.path}`,(err,data)=>{
        next();
      }
    )  
})


app.get('/api/users'  , (req,res)=>{
    res.setHeader("X-Myname" , "shubham singh")
    return res.json(users);
})

app.get('/users' , (req,res)=>{
    const html=`
   <ul>
     ${users.map( users=>`<li>${users.first_name} </li>`).join("")}
   </ul>
   `;
   res.send(html);
})

app.route('/api/users/:id').get((req,res)=>{
    const id= Number(req.params.id);
     const user=users.find(user=>user.id===id) ;
     if(!user) return res.status(404).json({ error: "user not found"})
     return res.json(user);

}).patch((req,res)=>{
    //edit user with id
  return  res.json({status:'pending'})
})
.delete((req,res)=>{
 //delete user with id
 return  res.json({status:'pending'})
})


app.post('/api/users' , async(req,res)=>{
    const body= req.body
    if(!body||!body.first_name || !body.email||!body.gender|| !body.job_title|| !body.last_name )
      {
        return res.status(400).jason({msg:"ALL FIELDS ARE REQUIRED"})
      }
    // users.push({...body, id: users.length + 1});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data)=>{
    //     return  res.status(201).json({status:"success",id:users.length});
    // })
 //create new user
 const result= await User.create({
   fisrtName:body.first_name ,
   lastName:body.job_title,
   email:body.email,
   gender:body.gender,
   jobTitle:body.job_title
 })

 return res.status(201).json({msg:'success'});
})

app.listen(PORT, ()=>{
    console.log(`server started at port : ${PORT}`);

})
