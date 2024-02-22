/**
 * Asynchronous nature of the node js
 * readFile function:
 * readFile runs asynchronously 
 * means this read file method is running in the background  with out blocking the main thread  
 * so the next line of code can executed without getting blocked
 * with this readFile function we are specify the file which we want to read  and 
 * to this read file function we are also specify the a callback function
 * the callback function get executed once the job of this read function method is done 
 * the job this read file method is which read the content of the file that we specified in first argument in the background,
 * once the readFile method read the all content of the file, the job the of readFile method is complete, then the callback function is we have passed to the main thread.
 * that callback function will be executed in the main thread and it log the content of the file
 * thats why we say that asynchronous code is non blocking code because it doesn't code the execution of rest of the code 
 * */   

/**
 * important note:
 * ---------------
 * In node js  there are many other apis or methods which node js provides which run runs asynchronously in the background and 
 * keep in mind that every api or every method, which node js provides  which runs asynchronously, to that api or to that method we need to pass a callback function,
 * and that callback function gets executed when the job of that api or method is complete and that callback function will executed in the main thread.
 * 
 * question:
 * --------
 * Why this has to actually in this way (or) whats the problem with synchronous/blocking code execution in node js (or) what do we actually use callback so many times in this node js code
 * node js we use javascript, javascript get executed in  only one single thread,
 * node js application is single thread provided by js, it is responsible for executing node js program code in the machine proccessor(CPU)
 * all the (1000s of)users accessing your application and all users are using the same single thread
 * if the one user logs the appliction the single thread with synchronously then all other users will have to wait for that execution to finish
 * its definally a problem for 1000s or million of the users at the same time
 * 
 * its obviously a terrible experience to the users and its really your job as a developer to avoid all these kinds of situations by using asynchrous code.
 * its works very differently in other programming languages like PHP because you get basically one new thread for each new user. 
 * this non blocking IO model is to be best solution for building high performance and scala ble web application .
 * 
 */