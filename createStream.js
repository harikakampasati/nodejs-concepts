const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.listen(8001, '127.0.0.1', () => {
    console.log("server has started ")
})
//  solution 1 without using reable and writable stream
// server.on('request', (req,res) => {
//     fs.readFile('./FILES/largeData.txt', (err, data) => {
//         if(err) {
//             res.end("Something went wrong");
//             return;
//         }
//         res.end(data)
//     })    
// })

//  solution 2 using reable and writable stream
// server.on('request', (req,res) => {
//    let rs = fs.createReadStream('./FILES/largeData.txt');
//    rs.on('data', (chunk) => { 
//         res.write(chunk);
//    });
//    rs.on('end', () => {
//     res.end();
//     })
//    rs.on('error', (err) =>{
//         res.end(err.message);
//    })
// })

//  solution 3 using pipe method:-
server.on('request', (req,res) => {
    let rs = fs.createReadStream('./FILES/largeData.txt');
    rs.pipe(res);
})


