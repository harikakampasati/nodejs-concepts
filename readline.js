/**
 * to read the input from the user we dont have any buit-in function 
 * we can use the module provided by the node js to read inputs from the teriminal
 * module name is readline
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter the nama: ", (name)=> {
    console.log("You enter the name is: "+ name)
    rl.close()
})
rl.on('close', () => {
    console.log("Interface is closed.");
    process.exit(0);
})