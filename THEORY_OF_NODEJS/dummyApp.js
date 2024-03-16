// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// //custom module
// const productDeailsById  = require("./Modules/productDetailsById")

// // JSON.parse convert json data into javascript object
// // if we want to use these product json data in our node application first we need to convert into javascript object
// let products = JSON.parse(fs.readFileSync(`${__dirname}/Data/products.json`, 'utf-8'));
// // const products = fs.readFileSync(`${__dirname}/Data/products.json`, 'utf-8')
// products = JSON.stringify(products)

// /**
//  * whenever we are making request to the server we are getting that request inside the request parameter 
//  * on this request parameter we have a property called url
//  * that url property is going to store the value which the user enter after route url
//  */ 

// // server = http.createServer((req,res) =>{
// //     let {query, pathname: path} =url.parse(req.url, true);
// //     if(path === '/' || path.toLocaleLowerCase() === '/home'){
// //         // before we call method called writeHead, we can use the writeHead method to set status code and the header for the response
// //         // to define a header for response we can pass  an object as second argument, here we can create some custome headers
// //         res.writeHead(200, {
// //             'Content-Type': 'text/html',
// //             'my-hearder': "hello harika kampasati"
// //         });
// //         res.end("you are in home page");
// //     }
// //     else if(path.toLocaleLowerCase() === '/about'){
// //         res.writeHead(200,  {
// //             'Content-Type': 'text/html',
// //             'my-hearder': "hello harika kampasati"
// //         });
// //         res.end("you are in about page");
// //     }
// //     else if(path.toLocaleLowerCase() === '/contact'){
// //         res.writeHead(200,  {
// //             'Content-Type': 'text/html',
// //             'my-hearder': "hello harika kampasati"
// //         });
// //         res.end("you are in contact page");
// //     }
// //     else if(path.toLocaleLowerCase() === '/products'){
// //         if(!query.id){
// //             res.writeHead(200, {
// //                 'Content-Type': 'application/json',
// //             });
// //             res.end(products);
// //         }
// //         else{
// //             const productId = query.id;
// //             const productDeails = productDeailsById(products, productId)
// //             const responseObj = []
// //             responseObj.push(productDeails)
// //             res.end(JSON.stringify(responseObj))
// //         }
        
// //     }
// //     else {
// //         res.writeHead(404,  {
// //             'Content-Type': 'text/html',
// //             'my-hearder': "hello harika kampasati"
// //         });
// //         res.end("Error: 404 page not found")
// //     }
// // })

// const  server = http.createServer();
// //this callback function is event handler function
// server.on('request', (req, res) => {
//     let {query, pathname: path} =url.parse(req.url, true);
//     if(path === '/' || path.toLocaleLowerCase() === '/home'){
//         // before we call method called writeHead, we can use the writeHead method to set status code and the header for the response
//         // to define a header for response we can pass  an object as second argument, here we can create some custome headers
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//             'my-hearder': "hello harika kampasati"
//         });
//         res.end("you are in home page");
//     }
//     else if(path.toLocaleLowerCase() === '/about'){
//         res.writeHead(200,  {
//             'Content-Type': 'text/html',
//             'my-hearder': "hello harika kampasati"
//         });
//         res.end("you are in about page");
//     }
//     else if(path.toLocaleLowerCase() === '/contact'){
//         res.writeHead(200,  {
//             'Content-Type': 'text/html',
//             'my-hearder': "hello harika kampasati"
//         });
//         res.end("you are in contact page");
//     }
//     else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//             res.writeHead(200, {
//                 'Content-Type': 'application/json',
//             });
//             res.end(products);
//         }
//         else{
//             const productId = query.id;
//             const productDeails = productDeailsById(products, productId)
//             const responseObj = []
//             responseObj.push(productDeails)
//             res.end(JSON.stringify(responseObj))
//         }
        
//     }
//     else {
//         res.writeHead(404,  {
//             'Content-Type': 'text/html',
//             'my-hearder': "hello harika kampasati"
//         });
//         res.end("Error: 404 page not found")
//     }

// })

// server.listen("3010","127.0.0.1",()=> {
//     console.log("server is listening")
// })

