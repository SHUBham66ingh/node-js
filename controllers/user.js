

const User = ("../models/user");


async function handleGetAllUsers(req, res)
{
    const allDbUsers = await User.find({});
    return res.json(allDbusers);
}

module.exports={
  handleGetAllUsers,
}