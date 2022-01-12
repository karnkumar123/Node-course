const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('There is a new sale');
})

myEmitter.on('newSale', () => {
    console.log('There is a new sale again');
})

myEmitter.on('newSale', (stock) => {
    console.log(`Stock left - ${stock}`);
})

myEmitter.emit('newSale', 10);