const EventEmitter = require('events');


class Sale extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new Sale();

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