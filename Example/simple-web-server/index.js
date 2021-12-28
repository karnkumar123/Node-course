const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`This callback is called each time when new req is entered`);
    res.end("Hello from server");
})
server.listen(3000, 'localhost', () => {   // localhost is same as 127.0.0.1 i.e default here. We dont need to write here.
    console.log('Server is listening at port 3000.. 😜');
})