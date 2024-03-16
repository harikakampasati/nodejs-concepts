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
 * 
 */