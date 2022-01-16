const express = require('express');
const app = express();
const userRouter = require('./routes/users-routes');
const productRouter = require('./routes/products-routes');

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

if(process.env.NODE_ENV === 'development'){
    app.use((req, res, next) => {
        req.requestTime = new Date().toLocaleString();
        console.log('Request Time: ', new Date().toLocaleString())
        next();
    })
}else{
    console.log('We are in ', process.env.NODE_ENV);
}


// user resource
app.use('/api/V1/users', userRouter);
// product resource
app.use('/api/V1/products', productRouter); 


module.exports = app;
