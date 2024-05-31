const express = require('express');

const router = express.Router();



router.get('/api/users'  , async(req,res)=>{
    const allDbUsers = await User.find({});
    return res.json(allDbusers);
})



router.
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



router.route('/api/users/:id').get(async(req,res)=>{
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


router.post('/api/users' , async(req,res)=>{
    const body= req.body
    if(!body||!body.first_name || !body.email||!body.gender|| !body.job_title|| !body.last_name )
      {
        return res.status(400).jason({msg:"ALL FIELDS ARE REQUIRED"})
      }
    // users.push({...body, id: users.length + 1});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users) , (err,data)=>{
    //     return  res.status(201).json({status:"success",id:users.length});
     })