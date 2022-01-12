const fs = require('fs');
const superagent = require('superagent');
const chalk = require('chalk');

const readFileAsPromise = fileUrl => {
    return new Promise(( resolve, reject) => {
        fs.readFile(fileUrl, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                reject('Error in retrieving the file ', err)
            }else{
                resolve(data)
            }
        })
    })
}

const writeFileAsPromise = (fileUrl, fileData) => {
    return new Promise(( resolve, reject) => {
        fs.writeFile(fileUrl, fileData, {encoding: 'utf-8'}, (err) => {
            if(err){
                reject(console.log('Error in writing the file ', err))
            }else{
                resolve('Image location has been written successfully !!')
            }
        })
    })
}

readFileAsPromise(`${__dirname}/dog-url.txt`).then((data) => {
    superagent.get(`${data}`).then(res => {
        writeFileAsPromise(`${__dirname}/dog-image.txt`, res.body.message).then((res) => {
            console.log(chalk.green(res));
        }).catch((err) => {
            console.log(chalk.red(err));
        })
    }).catch(err => {
        console.log('Error in getting the images ', err);
    })
}).catch((err) => {
    console.log(chalk.red(err));
})