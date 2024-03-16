const http = require("http");
const fs = require("fs");
const url = require("url");
const events = require("events");

//user defined modules
const productDeailsById  = require("./Modules/productDetailsById");
const user = require("./Modules/user");


let products = JSON.parse(fs.readFileSync(`${__dirname}/Data/products.json`, 'utf-8'));
products = JSON.stringify(products)


const  server = http.createServer();
server.on('request', (req, res) => {
    let {query, pathname: path} =url.parse(req.url, true);
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in home page");
    }
    else if(path.toLocaleLowerCase() === '/about'){
        res.writeHead(200,  {
            'Content-Type': 'text/html',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in about page");
    }
    else if(path.toLocaleLowerCase() === '/contact'){
        res.writeHead(200,  {
            'Content-Type': 'text/html',
            'my-hearder': "hello harika kampasati"
        });
        res.end("you are in contact page");
    }
    else if(path.toLocaleLowerCase() === '/products'){
        if(!query.id){
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.end(products);
        }
        else{
            const productId = query.id;
            const productDeails = productDeailsById(products, productId)
            const responseObj = []
            responseObj.push(productDeails)
            res.end(JSON.stringify(responseObj))
        }
        
    }
    else {
        res.writeHead(404,  {
            'Content-Type': 'text/html',
            'my-hearder': "hello harika kampasati"
        });
        res.end("Error: 404 page not found")
    }

})

server.listen("3010","127.0.0.1",()=> {
    console.log("server is listening")
})

let myEmitter = new user();

myEmitter.on("userCreated", (id, name)=> {
    console.log(`new user with name ${name} and id ${id} is created`);
})

myEmitter.on("userCreated", (id, name)=> {
    console.log(`new user with name ${name} and id ${id} is added to database`);
})

myEmitter.emit("userCreated", 248, "Harika Botta");

