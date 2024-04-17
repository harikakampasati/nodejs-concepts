/**
 * normal readFile and write file
 * source file ---read Buffer---> fs.readFile     fs.writeFile ---write buffer---> destination file
 * when we use readFile method to read a file, in between a buffer is created
 * from the source file the contant is read in the read buffer. and all the content is read at once. 
 * that read contant is available in our node js application we store that content is (for example) data variable
 * suppose we want to write the contant in data variable in another file, for that we use writeFile method
 * we want write the contant or data into the destination file to do that the writeFile method create write buffer in between 
 * it write all the data in that buffer and from that buffer the data return to the destination file all these happpens at once
 * 
 * these normal read and write work flow
 *  
 * the problem is 
 * if the file is very large, it is still going to read all data from the file before makes it available for use.
 * it might takes some time in reading all the content from that file (bcz the file is very large file)
 * after reading that it will be stored in system memory it is avaible for use.
 * the problem here is that once that large file complety read we are going store all that data in system's memory.
 * so it is going to take a lot of memory to store that data ..
 * 
 * 
 * with streams 
 * with streams we can process data piece by piece instead of reading or writting the whole file data at once
 * therefore we dont have to keep all the  data in the memory to do this oparation. 
 * 
 * reading the file using readStream method
 * ----------------------------------------
 * readstream is going to store the content of the source file
 * to do that again read buffer is created where the content will be written first (it store the content of the source file like memory in system)
 * since we are using the stream here,  in between the source and read buffer the read stream is created
 * using this stream instead reading all the content at once we can read the content piece by piece(chunk by chunk)
 * 
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 * |    |||||| |  -------------->  | |||       | ---------------> |           | -------------> |fs.readStream|
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 *  source file                     read Steam                     Read Buffer
 *                                                   |
 *                                                   |
 *                                                   v
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 * |    |||||| |  -------------->  |           | ---------------> |       ||| | -------------> |fs.readStream|
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 *  source file                     read Steam                     Read Buffer
 *                                                   |
 *                                                   |
 *                                                   v 
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 * |       ||| |  -------------->  |    |||    | ---------------> |       ||| | -------------> |fs.readStream|
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 *  source file                     read Steam                     Read Buffer
 *                                                   |
 *                                                   | 
 *                                                   v
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 * |       ||| |  -------------->  |           | ---------------> |    |||||| | -------------> |fs.readStream|
 * |-----------|                   |-----------|                  |-----------|                |-------------|
 *  source file                     read Steam                     Read Buffer
 *  
 * in this way we are not storing all the data in the memory 
 *    --> we are reading the chunk 
 *    --> we are storing in memory 
 *    --> we are using it 
 *    --> and then we are freeing the memory
 *    --> same as for every chunck of data in the source file
 *    --> this process is repeated until the entire file has been processed 
 * best examples:
 * youtube and netflix, they both are streaming companies 
 * because the stream videos using the same principle
 * so here instead of waiting until the entire video file loads, the processing is done  piece by piece (video is processed in chunks)
 * so that we can start watching video even before the entire file has been downloaded 
 * by streams we can validate large valume of data (for example streaming live videos, live matches  etc here the data comes from by external source)
 * 
 * Advantages of streams
 * ----------------------
 * streaming makes the data processing more efficient in terms of memory. because there is no need to keep all data in the memory
 * in terms of performance and time also, streaming has its advantages because we can start processing the data as soon as the first chunk of data arrives
 * 
 * streams how they are implemented in node js :-
 * ----------------------------------------------
 * in node we have 4 types of streams
 * 1) readable stream
 * 2) writable stream
 * 3) duplex stream 
 * 4) Transform stream
 * 
 * 1) readable stream
 * ------------------
 * the reabable stream are the one from where we can read or comsume data chunk by chunk 
 * example :-  Request stream, Read file stream 
 * important readable stream events:- 
 * ----------------------------------
 * data & end
 * 
 * data event :-
 * -----------
 * the data event is emitted when there is new piece or  new chunck of data to comsume.
 * for example when we are reading a file using read stream, 
 * the data will be read in chuncks so whenever a new chunck of data is read and avaible to use the data event will be emitted.
 * 
 * end event :-
 * ----------
 * end event will be emitted as soon as there is no more data to comsume 
 * for example we are reading data chunk by chunk from a file, once all the chunk of data is received and there is no more chunk of data available then the end event will be raised
 * 
 * important readable stream methods :-
 * ------------------------------------
 * read and pipe
 * 
 * read method:-
 * ------------
 * the read function can be called when we want to read each chunk from the readable stream one after the other.
 * 
 * pipe method:-
 * ------------
 * the pipe function allow us to plug to streams together passing data from one stream to another stream without having to worry much about events at all
 * for example  we can read data from the readable stream and we can write data from the writable stream simultaniously using the pipe method
 * 
 * streams are actually instances of event emitter class that means all types of streams can emit and listen the named events  
 * 
 * 2) writable stream :-
 * ------------------
 * the wriable streams are the one to which we can write data chunk by chunk, it is opposite to read stream.
 * the great example of writeable stream is http response that we can send back to the client
 * when we want send data we want to write somewhere that somewhere is the writable is writable stream 
 * for example if we want to send big video file to the client we would stream the result just like netflish or youtube instead of send complete video file at once 
 * 
 * important writable stream events :-
 * ------------------------------------
 * drain event
 * finish event
 * 
 * drain event :-
 * ------------
 * the drain event is raised when the writable stream internal buffer has been emptied 
 *  
 * finish event:-
 * -------------
 * the finish event in a writable stream is emitted after calling of the end method. when all the data being flushed to the hidden system 
 * basically it is similar to end event in readble stream
 * 
 * important writable stream methods :-
 * ----------------------------------
 * write method
 * end method
 * 
 * 3) duplex stream 
 * -----------------
 * duplex stream is the simply a stream that both readable and writable stream at the same time
 * example:- web sockets 
 * 
 * A web socket is basically a communication channel between the the client and server 
 * which works in both the direction, it stays and open once the connection has been established 
 * the real time web sockets are using in chating apps
 * 
 * 4) Transform stream
 * -------------------
 * the transform streams are duplex streams that is the streams that are both readable and writable 
 * and at the same time it can modify or transform the data as it is read or written 
 * example:- zlip 
 * 
 */

const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.listen(8001, '127.0.0.1', () => {
    console.log("server has started ")
})
//  solution 1 without using reable and writable stream
// server.on('request', (req,res) => {
//     fs.readFile('./FILES/largeData.txt', (err, data) => {
//         if(err) {
//             res.end("Something went wrong");
//             return;
//         }
//         res.end(data)
//     })    
// })

//  solution 1 using reable and writable stream
server.on('request', (req,res) => {
    // createReadStream function is going to read data in chunks
   let rs = fs.createReadStream('./FILES/largeData1.txt');
   // every time it reads new piece of data it is going to emit a data event
   rs.on('data', (chunk) => {
    // instead of use res.end method we should use write method 
    // because the end method is basically used to tell the data has been written to the right stream and no more data is available to write.
    // but in our we are going to receive data in chunks in pieces  
    // we want to call this end method only after we have read, all the chunks from the readable stream 
    // if i use end method here, the first chunk of data is going to pass it to the end method and this end method will write that chunck of data in the response stream 
    //  and it will close that response stream,it will not write anything else  after that in this response stream 
    // this write method can write multiple chunks of data in the response stream  
        res.write(chunk);
    // when we have written all the chunk of data into this response stream and there is no more chunk of data is available to write to this reponse stream
    // in that case we want to call this end method 
   });
    /**
     * whenever a new chunk of data is available that piece of data will be only stored in the memory and then it will be sent in the response 
     * and once it is sent in the response that data which we are stored in the memory that will be removed it proccess is continue until receive the last chunk of data
     * in this way we are going to save lots of memory because now instead of storing all the data, now we are storing piece of data in the memory 
     * */
   rs.on('end', () => {
        res.end();
   })
   rs.on('error', (err) =>{
        res.end(err.message);
   })
})

/**
 * pipe method
 * ----------
 * the problem in above code is 
 * let us say the reable stream is reading the data at 4 mbps and wriable stream is writing the data at 3 mbps  
 * so here our readable stream is much faster than writable stream 
 * this will overwhelm the wriable stream which can not handle all these incomming data so fast
 * here the wriable stream is response stream
 * so this problem is called as back pressure  
 * so back pressure is happens when the response cannot send the data nearly as fast as it is receiving it from the file
 * to solve this we can use pipe method
 * the pipe method will automatically handle the speed of data coming in and the speed of data is going out
 */
//  solution 3 using pipe method:-
server.on('request', (req,res) => {
    let rs = fs.createReadStream('./FILES/largeData.txt')
    // in pipe we need to pass a wriable stream or duplex stream or transform stream
    // syntax for pipe method:- readableSource.pipe(writable destination)
    rs.pipe(res);
    // basically the pipe method allow us to pipe the output of readable stream, write into the input of the wriable stream 
    // pipe method is only available in read stream not in the write stream

})