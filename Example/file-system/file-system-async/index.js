const fs = require('fs');
fs.readFile('../txt/input-async.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err) return console.log('Error occured 🤢', err);
    console.log(data);
    fs.writeFile('../txt/outfile-async.txt', `${data}\nFrom async method`, {encoding: 'utf-8'}, () => {
        console.log("Files has been written successfully 😊");
    })
})

