const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers, 
    createUser, 
    getUser, 
    updateUser, 
    deleteUser,
    isValidId,
    checkBody
} = require('../controllers/users-controller');

userRouter.param('id', isValidId)

userRouter.route('/')
    .get(getAllUsers)
    .post(checkBody, createUser);

userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = userRouter;