/**
 * for this file system we need to import a module "fs".
 * the file has many functions some of those are:
 * readFileSync function: 
 * *********************
 * this function read a file and read that file synchronously 
 * this function is going to read the content of the file that we are given the that function
 * once its read the content it will return the content that variable that we are assign
 * this is doing synchronously means it execute the line by line 
 * that means suppose the file large data, it takes 10 mins time, in that case the next line of code will have to wait for the time.
 * this effect the performace of the application
 * we have another function that read the file asynchronously, that means it does not block the execution of next line of the code.
 * 
 * writeFileSync function:
 * ***********************
 * this function write some to the file. this also works synchronously
 * if the output file is not there it creates the file and read the content  
 */

const fs = require('fs');
const textin = fs.readFileSync('./FILES/input.txt', 'utf-8')
console.log(textin);

const content = `Data read from input.txt: ${textin}. \n Data created ${new Date()}`
fs.writeFileSync("./FILES/output.txt", content)
