const express=require('express');

const users = require('./MOCK_DATA.json');

const app=express();
const PORT=8002;

app.use(express.urlencoded({extended:false}))

app.get('/api/users'  , (req,res)=>{
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
    
    //create new user
    return  res.json({status:"pending"});
})

app.listen(PORT, ()=>{
    console.log(`server started at port : ${PORT}`);

})
