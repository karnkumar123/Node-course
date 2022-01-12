const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog-url.txt`, {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log('Error in retrieving the file ', err);
    }else{
        superagent.get(`${data}`).then(res => {
            fs.writeFile(`${__dirname}/dog-image.txt`,res.body.message, {encoding: 'utf-8'}, (err) => {
                if(err){
                    console.log('Error in writing the file ', err);
                }else{
                    console.log('Image location has been written successfully !!');
                }
            })
        }).catch(err => {
            console.log('Error in getting the images ', err);
        })
    }
})