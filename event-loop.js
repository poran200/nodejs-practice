const fs  = require('fs');
const crypto = require('crypto');
setTimeout(() =>{
    console.log('timer 1 is finished ')
})
setImmediate(() =>{
console.log("immediate timer 1 is finished")
})

fs.readFile('test.txt', ((err, data) => {
    console.log('i/o task completed')
    setTimeout(() =>{
        console.log('timer 2 is finished ')
    })
    setTimeout(() =>{
        console.log('timer 3 is finished ')
    },3000)
    setImmediate(() =>{
        console.log("immediate timer 2 is finished")
    })
}))
console.log('hello from top level code execution !');
