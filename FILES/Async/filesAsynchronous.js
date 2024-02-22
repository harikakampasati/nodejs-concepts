const fs = require("fs");
// it has 3 arguments 
// 1.path, 2. encoding 3.callback function
fs.readFile(`${__dirname}/input.txt`,"utf-8", (error, data )=>{
    console.log(data)
});
console.log("reading file")

fs.writeFile(`${__dirname}/output.txt`, "helloooo worldddd", ()=> {
    console.log("writing file done ")
})
