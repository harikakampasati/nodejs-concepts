/**
 * when we send a response to our backend application it says backend developer who is responsible setting  status code as well as response headers for that response 
 * in developer tool in network tab, when we make new request, we can see that request has been sent if i open that request and if we go to header tab
 * here we  have some request headeres and response headers
 * in reponse headers its posible to set some response headers from backend application
 * and also set status code in response
 *  before we call method called writeHead, we can use the writeHead method to set status code and the header for the response
        res.writeHead(200);
 * the header of the response contain some additional information about the reponse for example 
 * - what type of response , - what time we are sending the response
 * before we call method called writeHead, we can use the writeHead method to set status code and the header for the response
 * to define a header for response we can pass  an object as second argument, here we can create some custome headers
 */
const http = require("http");

/**
 * whenever we are making request to the server we are getting that request inside the request parameter 
 * on this request parameter we have a property called url
 * that url property is going to store the value which the user enter after route url
 */ 

server = http.createServer((req,res) =>{
    const path = req.url; 
    if(path === '/' || path === '/home'){
        // before we call method called writeHead, we can use the writeHead method to set status code and the header for the response
        // to define a header for response we can pass  an object as second argument, here we can create some custome headers
        res.writeHead(200, {
            'Content-Type': 'text/json',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in home page");
    }
    else if( path === '/about'){
        res.writeHead(200,  {
            'Content-Type': 'text/json',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in about page");
    }
    else if( path === '/contact'){
        res.writeHead(200,  {
            'Content-Type': 'text/json',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in contact page");
    }
    else {
        res.writeHead(404,  {
            'Content-Type': 'text/json',
            'my-hearder': "hello harika kampasati"
        });
        res.end("Error: 404 page not found")
    }
})
server.listen("3010","127.0.0.1",()=> {
    console.log("server is listening")
})

