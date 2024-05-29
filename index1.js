const express=require('express');

const users = require('./MOCK_DATA.json');

const app=express();
const PORT=8002;

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

app.route('/api/users/:id').get()


app.get('/api/users/:id' , (req,res)=>{
    const id= Number(req.params.id);
     const user=users.find(user=>user.id===id) ;
     return res.json(user);

})

app.post('/api/users' , (req,res)=>{
    //create new user
    return  req.json({status:"pending"});
})

app.listen(PORT, ()=>{
    console.log(`server started at port : ${PORT}`);

})
