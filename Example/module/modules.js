//console.log(arguments);

// it returns a wrapper function and wraps our whole js code inside it
//console.log(require('module').wrapper); // (function (exports, require, module, __filename, __dirname) { ','\n})

const C1 = require('./test-module1');
const c1 = new C1();
console.log(c1.add(10,20));

const C2 = require('./test-module2');
const c2 = new C2();
console.log(c2.add(10,20));

const c3 = require('./test-module3');
console.log(c3.add(10,20));

const c4 = require('./test-module4');
console.log(c4.add(10,20));

const {add, mul} = require('./test-module4');
console.log(add(10,20), mul(10,23));