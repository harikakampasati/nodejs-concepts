/**
 * in event driven architecture we have 3 main players
 * event emitter, event listiener, event handler.
 *        
 *                emits events                   calls event handler
 * event emitter -------------> event listiener  ------------------->
 * 
 * event emitter emits the named events when something important to happens the app
 * for example a request hitting the server or timer expiring  or file finishing to read..  all these are emit events 
 * whoever is reaponsible for emitting these events is called as event emitter
 * when an event raised or emited the event can be picked by the event listner.
 * basically a event listener is going to listen or wait an event to happen 
 * these event listener will then fire up  the call back function attached to the event listener, when that event happens
 * this callback function here called as event handler
 * 
 * in short:
 * in one we have event emitter and other hand we have event listeners that will react to emitter events by calling the event handler function
 * 
 */
const server = http.createServer();
server.listen(8000, "127.0.0.1", () =>  {
    console.log("listening to request")
})
// on method here is event listener, the callback function is event handler
//this callback function is event handler function
// behind the scence the server Object is actually an instance of node js event emitter class 
// that means the server object inherits all the event emitting and listening logic from the event emitter class
server.on("request", (req,res) => {
    res.end("hello world")
});

/**
 * this event emitting and listening logic is called as "observer pattern" in javascript program
 * event emitting -----> event listener
 * and the opposite of this pattern id simply the function calling another function
 *  http.createServer((req,res) =>{ ...
 * but the observer pattern has been designed to react rather than to call
 * that is because there is huge benifit of using this architecture which is fact that everything is more decoupled
 */

/**
 * how to emit custom events
 * in order work with events in node we need to export events package in node js
 * the events are built in or core package to the node js
 * const events = require("events");
 * 
 * myEmitter is storing the instance of event emitter class
 * const myEmitter = events.EventEmitter();
 */
const events = require("events");
const myEmitter = events.EventEmitter();

// when this event is emit, we want to listen for that event ,
// when this event happens we want execute callback function 
myEmitter.on("userCreated", ()=> {
    console.log("new user is created");
})
myEmitter.on("userCreated", ()=> {
    console.log("new user is added to the db");
})
// it is going to emit the an event called event "userCreated"
myEmitter.emit("userCreated");
/**
 * here the "userCreated" event is raised, when this even is raised 
 * then this "on" method is listening that event so when this event was emitted this "on" method execute this callback function.
 * 
 * we can also set up multiple listener on the same event. 
 * here we can listen "userCreated" event multiple times and we can execute the defferent logic for each time
 * 
 * custom emitter can also emit other events like user update and  user deleted etc.. 
 * using this "on" method we can add listener for those events as well 
 */

/**
 * in real world projrects its a best practice to create a new class it inherits from the node js even emitter class   
 * EventEmitter class is base class 
 * const events = require("events");

    module.exports = class extends events.EventEmitter{
        constructor (){
            super();
        }
    }
    in with the constructor we are going to call the contructor of base class
    here the base class ki EventEmitter class
    to call the constructor of the EventEmitter we use super keyword
    // with this class we can emit event and listen to event
    const user = require("./Modules/user");
    
    // myEmitter is the instance of the user class
    let myEmitter = new user();
    myEmitter.on("userCreated", (id, name)=> {
        console.log(`new user with name ${name} and id ${id} is created`);
    })

    myEmitter.on("userCreated", (id, name)=> {
        console.log(`new user with name ${name} and id ${id} is added to database`);
    })

    myEmitter.emit("userCreated", 248, "Harika Botta");
 */