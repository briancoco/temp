//File Module
const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8' ,(err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result \n${first}\n${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})
console.log('starting next task');
//run two pieces of code asyncronously
//makes it so that your application can serve multiple uses at the same time
//start task, offload it, and start next task right away
//also messy, callback hell, can use async/await and promises to look cleaner
