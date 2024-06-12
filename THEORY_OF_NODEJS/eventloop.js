/**
 * Event loop :- 
 * event loops receives the callback functions whenever an event happens executes simple tasks in the main thread and offload the heavy tasks to the thread pool 
 *         main thread              event loop   ||    thread pool 
 *      |-------------------|    |----------------------------------|    
 *      |                   |    ||==============||================|| 
 *      |                   |    ||              ||    thread 1    || 
 *      |                   |    ||              ||    thread 2    ||   
 *      |                   |    ||              ||    thread 3    || 
 *      |                   |    ||              ||    thread 4    ||
 *      |-------------------|    ||==============||================||
 *       node js c++                 LIB UV
 * Event loop is the heart of the node js Architecture
 * event loop where all the callback functions wait for their execution.
 * when the main thread is empty the event loop pushes the callback function from the callback queue into the main thread for their execution.
 * Event loop offloads a callback function which is doing heavy tasks like file reading to the thread pool.
 * node js uses even driven architecture and its built around callback
 * (what actually happens is whenever something happens for example when we receive an http request on the node js server  or file is finish reading or when a timer expires all these task has emits events as soon as the task is complete and the event loop basically picks up these events and store the callback functions that are associated with each of these events and eventually push all these callbacks to the main thread for these execution)
 * in simple words the event loop receives events each time something important to happens and then it is responsible for executing the callbacks in the main thread that we define for each of these events 
 * 
 * How does all this works behind the scences, In what order all these callback functions actually executed  lets understand that :-
 * --------------------------------------------------------------------------------------------------------------------------------- 
 * keep in mind that the event loop starts immediately as soon as node js application starts.
 * whenever an event will happen, event loop will store the callback function attached that event and it will wait for the completion of execution of top level code.
 * when all the top level code is executed, the main thread will be empty and then the event loop will starts its job.
 * it start pushing callback functions in the main thread or offloading it to the thread pool for their execution.
 *** an event loop has multiple phases and in each phase of event loop, we have a separate callback queue
 * (the callback queue is basically where event loop stores the callback function attached to an event.)
 * 
 * each phase as its own callback queue :- each phase of an event loop has its own callback queue.
 * 4 most important phases of event loop
 * 
 *         main thread              event loop              ||    thread pool 
 *      |-------------------|    |---------------------------------------------|    
 *      |                   |    ||=========================||================|| 
 *      |                   |    ||1.expired timers         ||                || 
 *      |                   |    ||2.IO Tasks & polling     ||                ||   
 *      |                   |    ||3.setImmidiate callback  ||                || 
 *      |                   |    ||4.closed callback        ||                ||
 *      |-------------------|    ||=========================||================|| 
 * 
 * each phase as its own callback queue
 * in these callback queues we have some callback functions waiting for their execution  
 * 
 *         main thread              event loop            ||    thread pool 
 *      |-------------------|    |---------------------------------------------|    
 *      |                   |    ||=========================||================|| 
 *      |                   |    || |-------------------|   ||                || 
 *      |                   |    || |    C C            |   ||                ||
 *      |                   |    || |-------------------|   ||                ||
 *      |                   |    || 1.expired timers        ||                ||
 *      |                   |    || |-------------------|   ||                ||
 *      |                   |    || |    C C            |   ||                ||
 *      |                   |    || |-------------------|   ||                || 
 *      |                   |    || 2.IO Tasks & polling    ||                ||
 *      |                   |    || |-------------------|   ||                ||
 *      |                   |    || |    C              |   ||                ||
 *      |                   |    || |-------------------|   ||                ||   
 *      |                   |    || 3.setImmidiate callback ||                ||
 *      |                   |    || |-------------------|   ||                ||
 *      |                   |    || |    C              |   ||                ||
 *      |                   |    || |-------------------|   ||                || 
 *      |                   |    || 4.closed callback       ||                ||
 *      |-------------------|    ||=========================||================|| 
 *  1.expired timers  :-
 * ---------------------
 * in the first phase, the callback function attached to the timers are stored
 * (basically when a timer expires, the callback function attached to that timer will be stored, in the callback queue of the first pharse of event loop.)
 * for example in the below code the callback function attached to the setTimeout and setInterval
 * whenever these timers will expire the callback functions attached to these functions, they will be pushed to callback queue of the first phase
 * and there this callback function wait for their execution as soon as thr main thread is empty, the callback function  from the callback queue of first phase will be pushed to the main thread and there those callback function will be executed
 * so callback functions related to the timers are executed first in the event loop.
 * if a timer expires later, during the time when one of the other phases are being processed. in that case the callback of the timmer will be only processed as soon as the event loop comes back to the first phase
 * in simple words when the callback queue of the current phase is empty that is if there is no more callback functions in that callback queue to process then only the event loop will move the next phase 
 * 
 *  2.IO Tasks & polling:-
 * -------------------
 * in this phase the callbacks of IO related tasks are executed.
 * IO means task related to networking and file access.
 * so a callback function attached to the network or file read and write tasks are stored in callback queue of the second phase.
 * in second phase is also related to polling, polling simply means loooking for new io events that are ready to be processed and putting their callback function into the callback queue of this second phase.
 * the second phase the most important phase in the event loop. because in this phase we probebly 99%  of node js code is executed.
 * simply because  in a typical node application the bulk of what we need to do, is related to networking and also file accessing
 * 
 *  3.setImmidiate callback :-
 * ---------------------------
 * in the third phase the callback function attached to setImidiate function gets stored.
 * setImidiate is the special type of timer, if we want to proccess a callback immediatly affer io polling and expire timeer phase.
 * basically setImidiade is similar to  setTimeOut with the time interval passed to it as 0 milliseconds.
 * 
 *  4.closed callback :-
 * ---------------------
 * in this phase all the closed callbacks are stored for example when a web server or web sockets shuts down then close event will be emitted.
 * basically any callback attached to the close events will be executed in this phase.
 * 
 * once all the 4 phase of event loop has executed one cycle of event loop is complete.(we can also say one tick of event loop is complete)
 * each cycle of the event loop is called as tick  
 * 
 * once a tick of event loop is complete, now its time to decide whether event loop should continue the next cycle or the programming should exit? so how does node js decides that?
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * node js simply checks if there any timer or io task that is still running in the background. if there no timer or io task in the running it will simply exits the application.
 * but if there are any timer or IO tasks which are still doing its job then node js will continue running the event loop and teh next tick of the event will start.
 * 
 * why do we say that event loop is the heart of the node js architecture ?
 * ------------------------------------------------------------------------
 *  because event loop makes  asynchronous programming posible in node js 
 * 
 * 
 * 
 * these are 4 important phase of the event loop and each phase as its own callback queue.
 * besides these callback queues we have 2 more important callback queues and this is 
 *  1. micro task queue
 *  2. nextTick queue
 * 
 * 1.micro task queue 
 * ------------------
 * micro task queue store callback functions attached to the result promise
 * and nexttick queue store the any callback functions attached to the  process.nexttick functions 
 * * these two queue is not related to any phase of the event loop. these two queue are independent queues
 * if there any callback functions in one these two queues for their processing, they will be executing right after the current phase of the event event loop finishes, instead of waiting for the entire event loop to finish
 * 
 * defination:
 *   
 * 2. nextTick queue :-
 * --------------------
 * the proccess.nexttick queue is the function that we can use when we really need to execute a certain callback function right after the  currently processing the event loop phase
 * 
 * 
 * 
 */
//  example code 
const fs = require("fs");
// expired timer phase 1
setTimeout(() => {
    console.log("setTimeout Executed");
},0)
// IO tasks and polling phase 2
fs.readFile('input.txt', () => {
    console.log("file read");
})
// expired timer phase 1
setInterval(() => {
    console.log("setInterval Executed");
}, 1000)
// 3.setImmidiate callback  phase 3
setImmediate(() => {
    console.log("setImmediate Executed");
})
// IO tasks and polling phase 2
fs.writeFile('output.txt',data, ()=> {
    console.log("file written");
})
socket.on('close', () => {
    console.log("socket connection closed");
})

 /* 
 * 
 * what not to do to avoid blocking of main thread:-
 * -------------------------------------------------
 * Don't use sync versions of function in fs, cyptro and zlib modules inside the callback functions
 * Dont perform very complex calculations inside the callback function which can block the main thread
 * be careful with JSON which has a large number of JSON objects 
 * Dont use complex regular expression inside the callback functions.
 * 
 * 
 */
                           