/**
 * Routing 
 * -------
 * Routing defines the way in way which the client requests are handled by the application endpoints
 * different types of URLs patterns                                                                                                                                                                                                                                                 
 * 1. file based urls :-
 * --------------------
 * file based URL is that where in the URL we specify the file name which we want access and see in the browser 
 * so for example :-  nodeapp.com/index.html
 * here index.html is file here in the url we are mapping the url with the physical file on the server  
 * so when this request will send to the server then server will response with index.html file so that html file will be rendered in the browser  
 * 2. Resource based URL :-
 * -----------------------
 * in resource based url we eliminate the need of mapping a URL with the physical file 
 * here we map a URL pattern with a request Handler
 * example:  nodeapp.com/home
 * after the domain name we enter the resource name (home)
 * based on the resource which we are specify after the root URL  we are going to get the response.
 * in order to handle this request, in the backend application will have to create a request handler, that request handler can be a function or file
 * based on the resource which we are specified in the url, that function that request handler is going to handle that request and it is going to send the response according
 * when we specify the /home after the domain in the URL, the request handler is going to send response for the home resource 
 * we create that request handler using routing.
 * 
 * 
 * we can make our application to response to different URLs with different responses using Routing.
 * routing basically means implementing different actions for different URLs
 * these actions can be implemented in different ways, for example by creating a function
 * 
 * a route or a URL can also takes a paramenter  
 * 1.query strings :- we are specify the query string after the question mark and after we specify the key value pairs 
 *   if we have more than one query string we specify the & symbal (nodeapp.com/books?author=john&id=101)
 * 2.params :- (nodeapp.com/books/programming/js) here books is resource and programming and js are parameters
 * 
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
        res.end("you are in home page");
    }
    else if( path === '/about'){
        res.end("you are in about page");
    }
    else if( path === '/contact'){
        res.end("you are in contact page");
    }
    else {
        res.end("Error: 404 page not found")
    }
})
server.listen("3010","127.0.0.1",()=> {
    console.log("server is listening")
})