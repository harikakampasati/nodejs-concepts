/**
 * Parsing or extracting the query string from the url
 * Query String
 * a query string is basically a key value pair 
 * we specify after a question mark
 * suppose we want to ge details of the products where "id": 10
 * GET http://localhost:3010/products?id=10
 * if we have to use more than 1 query string then we use & symbol
 * GET http://localhost:3010/products?id=10&name=APPLE iPhone 12
 * in code from this url we need to pass id and name in query string and its values and to do that in node js we need to import another package
 * const url = require("url"); --> its going to return an object
 * this url object has a method called parse
 * url.parse()
 * in this parse() method we need to pass the URL  which we want to parse
 * url.parse(req.url)
 * this parse method also takes optional second parameter which is boolean values, if we specify the true here the parse method will pass query string from  the url
 * url.parse(req.url, true);
 * and again this expression is going to return an object
 * suppose console.log(url.parse(req.url, true))
 * server is listening
   Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?id=108&name=iphone',
        query: [Object: null prototype] { id: '108', name: 'iphone' },
        pathname: '/products',
        path: '/products?id=108&name=iphone',
        href: '/products?id=108&name=iphone'
}
    here the one which we are interested in query property and pathname property
    pathname property is basically scores the resource -->    pathname: '/products'
    the query property is store the query string and its value.
 */
/**
 * Object De stracturing
 * 
 * let x=url.parse(req.url, true); 
 * here we want to extract query property  and pathname property so here i am using object de-stacturing syntax
 * for de-stacturing syntax we use set of curly braces and inside we secify the property name
 * in object de-stractureing syntax the query it must match the property name which we want to extract 
 * query property here i want to extract query and pathname property
 * let {query, pathname} =url.parse(req.url, true);
 * we can also specify an alias to the path name
 * let {query, pathname: path} =url.parse(req.url, true);
 * this path is going to store the resource name like /home or /products etc (only resource name not query params like /products?id=108&name=iphone) 
 * conpare both syntaxs 
 * let {query, pathname: path} =url.parse(req.url, true); ===> here it is store only in path variable. the query strings are stored in query 
 * const path = req.url;  ===> here it store the resource including query strings like --> /products?id=108&name=iphone
 * the query :
 * suppose url is http://localhost:3010/products?id=108&name=iphone
 * the query property will store ---> query [Object: null prototype] { id: '108', name: 'iphone' }
 * console.log(query.id) ---> 108
 * 
 * 
 * */