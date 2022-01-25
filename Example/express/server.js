const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: path.join(__dirname, '../../config.env')});

const DB = process.env.DATABASE_CLOUD.replace('<DATABASE_CLOUD_USERNAME>', process.env.DATABASE_CLOUD_USERNAME)
                                     .replace('<DATABASE_CLOUD_PASSWORD>', process.env.DATABASE_CLOUD_PASSWORD)
                                     .replace('<DATABASE_CLOUD_HOSTNAME>', process.env.DATABASE_CLOUD_HOSTNAME)
                                     .replace('<DATABASE_CLOUD_DBNAME>', process.env.DATABASE_CLOUD_DBNAME)


            



const app = require('./app');

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => {
    console.log('Connection to DB successfully !');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is up at 3000...')
})