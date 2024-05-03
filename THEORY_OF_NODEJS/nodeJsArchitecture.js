/**
 * Architecture of node js
 * 
 * node dependencies:
 *      node dependencies are basically some libraries on which node js depends on in order to work properly.
 *      we already know node js is the javascript runtime environment. this runtime as several dependencies on which it depends on to work properly 
 *      and the most important dependencies are v8 javascript engine and libuv
 * v8 javascript engine :
 *  -> V8 engine in node js is responsible for executing the javascript code which we write to create backend appilication thats why V8 is a dependency for node js
 *  -> if it wasn't for v8 engine node would have absolutely no way of understanding and executing javascript code that we write for developing the node application
 *  -> v8 engine is responsible for converting javascript code into machine code that computer can actully understand and execute
 *  -> v8 engine alone is not enough to create a whole server side framework like node js thats why we also have lib Uv in node 
 *  -> lib UV is an open source library a strong focus on dealing with asynctronous input and output.
 *  -> if you have worked with javascript in browser then you already know that when we use javascript browser it does not allow us to access underlying clients operating system of file and folder
 *  -> there we can not use Javascript to read or write file from the client's because of secrurity reasons 
 *  -> we have that capability with javascript when we use it in node js and this cability is provided by the libuv
 *  -> lib UV gives node access to underlying computer operating system, file system, networking and many more... thats why its another important dependency of node js runtime..
 *  -> besides that lib uv also two extremely important features of node js. these are 
 *      1) event loop -> this is responsible for executing easy tasks like executing callback functions and network ios
 *      2) thread pool -> this thread pool is used to process heavy tasks like file access or compression or anything like that
 *  ->  lib uv is completely written in c++ langunage and not a javascript.
 *  ->  also V8 engine is also written in c++ and along with javascript 
 *  -> the important point to note here is that node js ties all these libraries together no matter if it is return in c++ or javascript 
 *  -> and then it gives us developers access to their  function in pure javascript running in node js
 *  -> still gives us access to functions like file reading which actually return in c++ language behind the scences
 * 
 *                              |-----------|-------------|
 *         |------|             |event loop | thread pool | 
 *         |  V8  |             |           |             |
 *         |------|             |-----------|-------------|            
 *      v8 (c++ and js)              LIBUV(c++)      
 *         
 *  -> node actually does not rely only on v8 engine and libuv as its dependenecies it also has other dependencies like
 *       HTTP Parser --> for passing the http
 *       Cas --> for some DNS request staff
 *       open SSL --> for some crpto graphy 
 *       Zlib --> compression  etc
 * 
 * 
 *  what is process?
 *  A process is what facilitates the execution of program. in simple words a process is just a program which is currently executing
 *  every process by default has a single main thread  which is reponsible for executing the program code in the process.
 *  
 *  what is thread? 
 *  A thread is what is respondsible for executing a program code in the process. By default, every process has one main thread
 * 
 *  in some programming languages like c, java or c-sharp we can write code to create multiple treads in a process but by default a process has a single thread.
 *  but in node we don't have that option to create multiple threads programmetically so node js pragrams are executed inside one single thread( main single thread which process gets)
 * 
 */

//what exactly happens in the single thread when we start our node application 
// lets understanding with an example
const http = require("http");
const fs = require("fs");

console.log("Node js program starts...");

fs.readFile("index.txt", (error, data)=> {
    console.log(data)
});

function someTask(){

}
someTask()

http.createServer((req,res) => {
    fs.readFile('largefile.txt', )
})

/**
 *  here simple node js program 
 * when we run the run this node js program all the modules that our node application needs that will be required and imported and that will happend in the main thread
 * 
 *        main thread              event loop         thread pool 
 *      |-------------------|    |----------------------------------|    
 *      |                   |    ||==============||================|| 
 *      | const http ...    |    ||   callback <-|| fs.readFile("..|| 
 *      | const fs ...      |    ||   callback <-|| http.createSe..||   
 *      | console.log("N..  |    ||              ||                || 
 *      | someTask()        |    ||              ||                ||
 *      |-------------------|    ||==============||================||
 *       node js c++                 LIB UV
 * 
 * and also all the top level codes that means the code which is "not" inside any callback function will be executed and it will also get execited in the main thread.
 * now all other code which run asynchronously like file system function, they are not executed in the main thread. they are executed in the background and that background here is thread pool
 * and with these readFile function we also have the callback function which will be called when the job of this readfile function is finished (once it completely read all data from the input.txt file) 
 * once it read the data completely from input.txt file and the callback function attacted to this read file function that will be pushed to event loop
 * in the event loop this callback function will wait for its execution because 
 * the callback function here will not get executed immediately the callback functions which waits inside the event loop, that get executed when the main thread is empty (i.e all the top level code already executed)
 * once the top level code already executed the event loop finally starts and event loop simply pushes callback functions from the callback queue to main thread where those callback function is executed
 * 
 * (NOTE: when the execution all the top level code is complete then only the execution of the callback function sitting in the callback queue or sitting in the event loop it will start)
 * important
 * event loop is where most of the work is done in node application 
 * we can say that even loop is the heart of the really the heart of the entire node architecture
 * event loop basically performs simple tasks and its offloads heavy tasks to the thread pool
 * in node.js by default we get 4 additional threads in the thread pool which are completely separate from main single thread 
 * we can actully configiture it up to 1024 threads but usually these four are enough and these threads together form thread pool
 * all these happends automatically behind the scences  
 * 
 *  
 * 
 */