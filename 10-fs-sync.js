//File Module
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result \n${first}\n${second}`, {flag: 'a'});
console.log('done with this task');
console.log('starting the next one');
//sync - goes line by line
//problem b/c when one user is reading/writing file other users cannot
 