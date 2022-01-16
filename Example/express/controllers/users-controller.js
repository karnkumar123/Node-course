const path = require('path');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../data-json/users.json'), {encoding: 'utf-8'}));

const getAllUsers = (req, res) =>{
    res.status(200).json({
        status: 'success',
        message: users.length,
        users: users
    })
}

const getUser = (req, res) =>{
    const user = users.find(el => el.id === +req.params.id);
    res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
        user: user
    })
}

const updateUser = (req, res) =>{
    res.status(200).json({
        status: 'success',
        message: 'Updated data'
    })
}

const deleteUser = (req, res) =>{
    res.status(200).json({
        status: 'success',
        message: 'Deleted data'
    })
}

const createUser = (req, res) => {
    const newId = users[users.length-1].id + 1;
    const newUser = Object.assign({id: newId}, req.body)
    users.push(newUser);
    fs.writeFile(path.join(__dirname, '../../data-json/users.json'), JSON.stringify(users), (err) => {
        res.status(201).json({
            status: 'success',
            message: `New user is created with ${newId}`
        })
    })
}

const isValidId = (req, res, next, val) => {
    const id = +req.params.id;  // converting string to number
    if(id > users.length){
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id'
        })
    }
   next();
} 
const checkBody = (req, res, next) => {
    if(req.body.username.toLowerCase() === 'admin'){
        return res.status(400).json({
            status: 'Failed',
            message: 'Username cant be Admin'
        })
    }
    next();
}

module.exports = {
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser, 
    createUser,
    isValidId,
    checkBody
}