/**
 * An overview of how web works
 * ----------------------------                                                   server
 *              client                                                     |--------------------------------|
 *    |---------------------------|      (sending request)--------->       | node app | java app | .net app |
 *    | domain name:              |      <--------(sending response)       | 8000     | 4000     |  3000    |
 *    | nodeapp.com/home          |                                        | ip address: 192.168.20.134     |
 *    |                           |                                        |--------------------------------|
 *    |---------------------------|   
 * 
 * on the server we are hosting 3 applications (node app, java app, .net app).
 * all the 3 application are hosted on the same server with the given ip address (192.168.20.134) but in different port numbers
 * let see from the browser we want access this node application (here browser is client)
 * to access this application from the browser we need to type the URL(domain name ) of that application 
 * after type the url when we press enter the client(browser) is going to send a request to the server where the application is hosted.
 * and then the sever will send back the response, which is going to contain the webpage that we have just requested.
 * this proccess we called as the request and response model or client server architecture.
 * 
 * question 1:
 * when we type this domain name  how does the client know to which server it has to send the request and to  which port number it has to access the application
 * the domain name we typed in browser, this is not real address of the server. it just a nice name that is easy for remember.
 * in reality the server does not have a name, it has ip address 
 * for example our node app is hosted on this server with this ip address 192.168.20.134. so when we type domain name in the URL, 
 * we need a way of kind of converting this domain name to the real ip address where the application is hosted and that happens through the DNS 
 * before sending request to server, the browser makes a request to the DNS (Domain name server) 
 * DNS :-
 * ----- 
 * the DNS server is basically responsible for matching domain name with actual IP address 
 * and every application hosted on the some port number so after the domain name we have a colon and then we have the port number where the application actually hostedand 
 * then DNS will send back the real ip addres to the browser
 * example:- https://www.nodeapp.com/home ===>>> https://192.168.20.134:8000/home
 *                                                                                    
 *    |-------| 
 *    | DNS   | https://www.nodeapp.com/home
 *    |-------| https://192.168.20.134:8000/home
 *               ^
 *               |  |
 *               |  |
 *               |  v                                                         server
 *        client                                                           |--------------------------------|
 *    |---------------------------|                                        | node app | java app | .net app |
 *    | domain name:              |      (sending request)--------->       | 8000     | 4000     |  3000    |
 *    | nodeapp.com/home          |      <------TCP/IP------------->       | ip address: 192.168.20.134     |
 *    |                           |      <--------(sending response)       |--------------------------------|
 *    |---------------------------| 
 * once we have the real ip address a TCP socket connection is established between the browser and the server. 
 * now the client and server are connected, and this connection is kept alive for the entire time it takes to send the request and receive the response with all the files of the website
 * TCP/IP :-
 * ------
 * TCP :- Transmission control protocal and ip stands for Internet protocal
 * together they are the communication protocals that defines exactly how the data transfers across the web
 * they are basically the internet's fundamental control system because they are the one who set the rules about how the data moves on the internet  
 * the job of TCP is break up  request and response into thousands of small small chuncks before they are sent  
 * then once they get to their distnation it will reassemble all the packets into the  Original request or response
 * so that message arrives at the destination as quickly as posible.
 * then the job of the IP protocal is  actually send and Route all these packets to through the interent. so it ensure that all the packet arrives at the right distination by using the IP address on each of these packets
 * 
 * step1:-  domain name resolved
 * step2:-  tcp/ip connected resolved
 * step3:-  http request/response
 * 
 * HTTP:-
 * ----
 * when client send the request to the server its http request
 * HTTP stands for hypertext transfer protocal that allows clients and webserver to communicate, 
 * by sending request from the client to the server and receiving response from the server to client
 * http request:-
 *    it contain some information which server needs  in order to process the request
 *    example: - 
 *      GET  /home http/1.1
 *      Host: www.nodeapp.com
 *      User Agent: Mozilla/5.0
 *      Body: null 
 *    http request types :- GET, POST, PUT, DELETE 
 *    request headers:- 
 *      request also has some request headers.request headers has some information  that we have send above the request itself 
 *      EXAMPLE: what browser we are using, and what what time the request made and many more,,
 * now our question will hit the server then the server will send it with the HTTP response 
 * http response:-
 *      the http response also has some information related to that response 
 *      Example:-
 *         HTTP/1.1 200 OK  --> whether the req is successfull or not  
 *         Date: Tue, 06 sep 2022 --> response headers
 *         Content-type: text/html   --> response headers
 *         Transfer-encoding: chunked  --> response headers
 *         Body: some content  --> response body
 * 
 * as a backend developer we dont have control http request but we have control on http response how it look likes 
 * 
 */                                                       