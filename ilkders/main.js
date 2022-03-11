import http from "http";

const server = http.createServer((request,response)=>{
    console.log("Request received");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Hello World");
    response.end();
});

const port = 4000;
server.listen(port);

