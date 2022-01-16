const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: path.join(__dirname, '../../config.env')});

const app = require('./app');


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is up at 3000...')
})