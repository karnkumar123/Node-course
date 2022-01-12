const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Request received')
})

server.on('close', () => {
    console.log('Server closed');
})

server.on('error', () => {
    console.log('Error occured');
})

server.listen(3000, 'localhost', () => {
    console.log('server is waiting for request...')
})

