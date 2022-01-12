const fs = require('fs');
const http = require('http');
const path = require('path');
const server = http.createServer();

server.on('request', (req, res) => {
    // solution 1
    // fs.readFile(path.join(__dirname, '/input-file.txt'), {encoding: 'utf-8'}, (err, data) => {
    //     res.end(data);
    // })
   
    // solution
    // const readableStream = fs.createReadStream('./input-file.txt');
    // readableStream.on('data', (chunk) => {
    //     res.write(chunk);
    // })
    // readableStream.on('end', () => {
    //     res.end();
    // })
    // readableStream.on('error', (err) =>{
    //     res.statusCode = 500;
    //     res.end(err);
    // })

    //solution 3
    const readableStream = fs.createReadStream('./input-file.txt');
    readableStream.pipe(res);
    
})

server.listen(3000, 'localhost', () => {
    console.log('server is up..');
})