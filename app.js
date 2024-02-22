const http = require("http");
const server = http.createServer( (req, res)=> {
    console.log("new request received");
    res.end("hello server")
    console.log(res)
})
server.listen(3030,"127.0.0.1",()=>{
    console.log("server is listening");
}) 