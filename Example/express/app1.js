const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data-json/users.json'), {encoding: 'utf-8'}));
app.use(express.json())

// app.get('/', (req, res) => {
//     //res.status(200).send('Hello from express server!')
//     res.status(200).json({status: 'success', message: 'Hello from express server'});
// })

// app.post('/', (req, res) => {
//       res.status(200).send('Hello from express server!')
// })

const getAllUsers = (req, res) =>{
    res.status(200).json({
        status: 'success',
        message: users.length,
        users: users
    })
}

const getUser = (req, res) =>{
    const id = +req.params.id;  // converting string to number
    const result = isUserAvailable(id);
    if(!result.status){
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id'
        })
    }
    res.status(200).json({
        status: 'success',
        user: result.data
    })
}

const updateUser = (req, res) =>{
    const id = +req.params.id;  // converting string to number
    const result = isUserAvailable(id);
    if(!result.status){
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id'
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'Updated data'
    })
}

const deleteUser = (req, res) =>{
    const id = +req.params.id;  // converting string to number
    const result = isUserAvailable(id);
    if(!result.status){
        return res.status(404).json({
            status: 'Failed',
            message: 'Invalid Id'
        })
    }
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

app.get('/api/V1/users', getAllUsers);
app.get('/api/V1/users/:id', getUser);
app.patch('/api/V1/users/:id', updateUser);
app.delete('/api/V1/users/:id', deleteUser)
app.post('/api/V1/users', createUser)

const isUserAvailable = (id) => {
    const user = users.find(el => el.id === id);
    if(user){
        return {status: true, data: user};
    }else{
        return {status: false}
    }
} 

const PORT = 3000;
app.listen(PORT, () => {
    console.log('server is up at 3000...')
})
