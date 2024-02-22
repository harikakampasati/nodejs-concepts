// creating simple server
/**
 * first we need to import the package called http ,it returns an object
 * in order to build a web server we need to do 2 things
 *          1. create a server
 *          2. start the server
 * 1. create a server
 * ------------------
 * to create a server we have a method in http object called  http.createServer() 
 * to this create server function has callback function
 * this callback will executed every time a new request hits the server
 * when a new request hits server this callback function, it receives 2 parameters called request(object) and response(object). these are 2 objects 
 * this create server method is also going to return the server object
 * 2. start the server
 * -------------------
 * on this server object we call a method called listen
 * this listen method starts server and it listen to the new requests
 * listen method take a few parameters are
 * 1.  port number, where the application is running
 * 2. we also need to be specify the host (in our case it is localhost: 127.0.0.1)
 * 3. callback function (optional) this callback function gets executed as soon as the server actually starts and listening to the requests
 * 
 * as long as the server is running we are able to listen new requests
 * once the server is stops running, we cannt able to able listen requests
 */
const http = require("http");
const server = http.createServer( (req, res)=> {
    console.log("new request received");
    res.end("hello server")
})
server.listen(3030,"127.0.0.1",()=>{
    console.log("server is listening");
})