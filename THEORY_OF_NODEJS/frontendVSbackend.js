/**
 * frontEnd development :-
 * ---------------------
 * frontEnd development is everything that happends on the client (that means on the web browser)
 * it called as frontend basically about designing UI which will be in front of the user, which the user can see.
 * in frontend development basically we use the basic technologies like HTML,CSS,Javascript of frameworks like angular, libraries like react js
 * so all these technologies together form the frontend development stack.
 * 
 * backEnd Development :-
 * ---------------------
 * backEnd Development is everything about happends in server side (its invisble to the final user)
 * 
 * what is server really is?:-
 * -------------------------
 * server is basically is a computer that connect to the internet which can be access by the other computers or devices.
 * the server stores the website static files like HTML documents CSS, Javascript files etc
 * it also run http server that capable of understanding URLs receiving requests and also delivering responses
 * so this piece of http software is what communicates with the browser or the clients using the request and responses
 * we can think of it like bridge between the frontend and backend of the website application
 * 
 * static website:-
 * ----------------
 * whenever we create a website or web application there is always be a client and server
 * the static website is the simplest type of website and in case of the static website developer uploads the final ready to be certifile of to the website onto be web server
 * these files usaually contain HTML CSS Javascript and images of the website
 * and these are the exact files, which the server will send to the client ie  to the browser, when the website is requested and then the browser will render these files as web page
 * keep in mind that in case of the static website there is no work done on the server and there is no backend code and there is also no backend application 
 * whatsoever running on the server the server is simply serving static files like HTML,CSS,JAvascript and Images Etc..
 * showing animations on the webpage and handling event on the frontend etc that is diffent kind of dynamic, it is in the comtext of frontend development
 * 
 * dynamic website:-
 * -----------------
 * Dynamic website are difffernt from the static  websites as the are usually built on the server.
 * Dynamic websites usaually contains the database 
 * then in case of the dynamic website we also have the backend application running on the server
 * this backend application can be built using the node js, python php etc..
 * this backend application fetchs data from the database and together with the predefinded template it builds each page that the user request dynamically based on the data coming from the database
 * so here we are not serving static html css javascript 
 * so each time the browser request the page the web page is builts as HTML CSS and Javascript file and it send back to the browser and then the browser renders that dynamically generated HTML,CSS,Javascript and show it to the user 
 * * now this whole proper is called as server side rendering because here the webpage which is rendered in the browser,   it is created on the server 
 * so this type of website is dynamic website. because the content of the website is built based on the data coming from the database and this content can change all the time accordingly to the content in the database or user action on the web page
 * * the dynamic website are often called as web applications 
 * tradinally static and dynamic website are only the two type of the websites but in recent years because of how powerful the browsers have become on the client side, we see more and more websites that are basically built using web apis 
 * 
 * API Powered Websites :-
 * ----------------------
 * API = Application programming interface
 * API are not only used for sending data the "Application" in API can actually mean many different things
 * for example 
 *      --> fs and http module in NODE JS are also an APIs.
 *      --> Browser DOM APIs like fetch and getElementById 
 *      --> A class in programming language cantaining methods and properties
 * API is does not always mean web api it can mean many different things  
 * An API is piece of software that can be used by another piece of software in order to allow applications to talk each other
 * the API powered website is actually quite similar to the dynamic website that means both work dynamically 
 * now the big difference is that with web api we only send the data in the response to the client we dont send HTML in the response
 * the response data usaually in the json format 
 * in case of web api  we send json data in the response( to the client ) and we dont send tbe entire website built using HTML CSS Javascript
 * when building a web API powered website there are always 2 steps involved 
 *      -> building an API
 *      -> comsuming an API on the client side 
 * building an API :-
 * ------------------
 * here we create an api which is hosted on the server now on the client side, the website is assambled by piugging the data that we receive into some sort of template 
 * these templates are usually built some frontend framework or libraries like angular or react or view
 * 
 * when building API powered website, the building phase of the website is kind of moved from backend to frontend (we can also say server to client)
 * * so this the reason why many times you will see  Dynamic website are called server side rendered (because there are actually build on the server)
 * * on the other hand API powered websites are often called as client-side rendered (because here the website built on client side)
 * * the main advantage of using a web api is API is that it can not only be comsumed by the browser but also by other clients like IOS app, android app, Desktop App etc.
 * * when we built API powered website the posibilities are endless means one backend data source which can be requested and used anywhere and not just browser
 * and this advantage we dont have when we build normat dynamic server side rendered website  
 * 
 * 
 * 
 *   
 */