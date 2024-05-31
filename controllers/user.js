

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


module.exports={
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
}