const express=require('express');
const fs = require('fs')
// const users = require('./MOCK_DATA.json');
const mongoose = require("mongoose");

const app=express();
const PORT=8009;

//schema....
mongoose.connect 
("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=> console.log('mongoDb connected'))
.catch((err)=> console.log('mongo error' ,err))

// schema

app.use(express.urlencoded({extended:false}))

app.use(( req,res,next)=>{
      fs.appendFile('log.txt' , `\n${req.ip} :${req.method}: ${req.path}`,(err,data)=>{
        next();
      }
    )  
})


app.get('/api/users'  , async(req,res)=>{
    const allDbUsers = await User.find({});
    return res.json(allDbusers);
})



app.
get('/users' , async(req,res)=>{
  const allDbUsers = await User.find({});
    const html=`
   <ul>
     ${
    allDbUsersUsers.map( users=>`<li>${user.firstName} - ${user.email} </li>`).join("")}
   </ul>
   `;
   res.send(html);
})



app.route('/api/users/:id').get(async(req,res)=>{
      const user = await User.findById(req.params.id)
     if(!user) return res.status(404).json({ error: "user not found"})
     return res.json(user);

}).patch( async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id  , {lastName :'Changed'});
  return  res.json({status:'Success'})
})
.delete( async(req,res)=>{
  await User.findByIdAndDelete(req.params.id)
 return  res.json({status:'success'})
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
