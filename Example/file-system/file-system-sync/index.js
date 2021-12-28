const fs = require('fs');
const input = fs.readFileSync('../txt/input-sync.txt', {encoding: 'utf-8'});
console.log(input);

const currentTime = new Date().toLocaleString();
const createdBy = 'Karn Kumar';
fs.writeFileSync('../txt/outfile-sync.txt', `${input}\ncreated on ${currentTime}\nCreated By ${createdBy}`);