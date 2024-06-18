const fs = require("fs");

console.log("program has started");
// stored phase 1 in event loop
// setTimeout(()=> {
//     console.log('Timer callback executed'); 
// },0);
// // stored phase 3 in event loop
// setImmediate(()=> {
//     console.log('setImmediate callback executed'); 
// })
fs.readFile('./FILES/Async/input.txt', () => {
    console.log("reading file is completed");

    setTimeout(()=> {
        console.log('Timer callback executed'); 
    },0);

    setImmediate(()=> {
        console.log('setImmediate callback executed'); 
    })
    process.nextTick(() => {console.log('Process.nettick callback is executed')})
})
console.log("program has ended");