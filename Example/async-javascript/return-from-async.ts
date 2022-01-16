const fs = require('fs');
const superagent = require('superagent');
const chalk = require('chalk');

const readFileAsPromise = fileUrl => {
    return new Promise(( resolve, reject) => {
        fs.readFile(fileUrl, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                reject('Error in retrieving the file ')
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
                reject(console.log('Error in writing the file '))
            }else{
                resolve('Image location has been written successfully !!')
            }
        })
    })
}

const getDogPic = async () => {
    try {
        const dogUrl = await readFileAsPromise(`${__dirname}/dog-url.txt`);
        const dogImage = await superagent.get(`${dogUrl}`);
        const res = await writeFileAsPromise(`${__dirname}/dog-image.txt`, dogImage.body.message);
        console.log(chalk.bgGreen(res));
    } catch (error) {
        console.log(chalk.bgRed(error));
    }
    return 'Work Done';
}
//const x = getDogPic();  // promise pending
//console.log('Return from async functon->',x);
getDogPic().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// since getDogPic returns a promise we can also write in async await like below

(async () => {
    try {
        const res = await getDogPic();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})();

