const express = require('express');
const {handleGetAllUsers,handleGetUsersById,handleUpdateUserById }= require('../controllers/users');
const { getUserById } = require('../controllers/user');
const router = express.Router();



router.get("/" , handleGetAllUsers ,);


router
.route('/:id')
.get(handleGetAllUsersById)
.patch(handleUpdateUserById)
.delete( async(req,res)=>{
  await User.findByIdAndDelete(req.params.id)
 return  res.json({status:'success'})
})


router.post('/' , async(req,res)=>{
    const body= req.body
    if(!body||!body.first_name || !body.email||!body.gender|| !body.job_title|| !body.last_name )
      {
        return res.status(400).jason({msg:"ALL FIELDS ARE REQUIRED"})
      }
     const result= await User.create({
        fisrtName:body.first_name ,
        lastName:body.job_title,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title
      });
     
      return res.status(201).json({msg:'success'});
    })

    module.exports = router
  