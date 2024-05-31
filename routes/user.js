const express = require('express');
const {handleGetAllUsers,handleGetUsersById,handleUpdateUserById,handleDeleteUserById ,handleCreateUserById}= require('../controllers/users');
const { getUserById, handleDeleteUserById } = require('../controllers/user');
const router = express.Router();



router.get("/" , handleGetAllUsers ,);


router
.route('/:id')
.get(handleGetAllUsersById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


router.post('/' , handleCreateUserById)
  

    module.exports = router
  