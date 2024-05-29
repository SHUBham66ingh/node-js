const express=require('express');
const fs = require('fs')
const users = require('./MOCK_DATA.json');

const app=express();
const PORT=8003;

app.use(express.urlencoded({extended:false}))

app.use(( req,res,next)=>{
      fs.appendFile('log.txt' , `\n${req.ip} :${req.method}: ${req.path}`,(err,data)=>{
        next();
      }
    )  
})


app.get('/api/users'  , (req,res)=>{
console.log(req.headers);
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
     return res.json(user);

}).patch((req,res)=>{
    //edit user with id
  return  res.json({status:'pending'})
})
.delete((req,res)=>{
 //delete user with id
 return  res.json({status:'pending'})
})


app.post('/api/users' , (req,res)=>{
    const body= req.body
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data)=>{
        return  res.json({status:"success",id:users.length});
    })
 //create new user
})

app.listen(PORT, ()=>{
    console.log(`server started at port : ${PORT}`);

})
