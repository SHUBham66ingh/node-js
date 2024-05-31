

const User = ("../models/user");


async function handleGetAllUsers(req, res)
{
    const allDbUsers = await User.find({});
    return res.json(allDbusers);
}

async function handleGetUserById(req, res)
{
    const user = await User.findById(req.params.id)
     if(!user) return res.status(404).json({ error: "user not found"})
     return res.json(user);
}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id  , {lastName :'Changed'});
    return  res.json({status:'Success'})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
 return  res.json({status:'success'})
}


async function handleCreateUserById(req,res){
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
}



module.exports={
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUserById,
}