const http = require('http');
const fs = require('fs');

const studentsData = fs.readFileSync('../../data-json/students-data.json', 'utf-8');
const studentsDataObj = JSON.parse(studentsData);
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(req.url === '/' || req.url === '/overview'){
        res.end('This is overview page');
    }else if(req.url === '/product'){
        res.end('This is product page')
    }else if(req.url === '/api'){
        res.writeHead(200, {
            'Content-type':'application/json'
        })
        res.end(studentsData);
    }else{
        res.writeHead(200, {
            'Content-type': 'text/html',
            'my-own-header': 'my-own-header'
        })
        res.end(`<div style="background-color: aqua; color: red; border: 2px solid purple; padding: 5px;">Page not found!</div>`)
    }
})
server.listen(3000, 'localhost', () => {   // localhost is same as 127.0.0.1 i.e default here. We dont need to write here.
    console.log('Server is listening at port 3000.. 😜');
})