

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

module.exports={
  handleGetAllUsers,
  handleGetAllUserById,
}