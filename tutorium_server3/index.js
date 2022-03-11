const res = require("express/lib/response");
const http = require("http");


const server = http.createServer((request,response)=>{

    if(request.url === "/"){
        response.write("Main page...");
        response.end();
    }

    if(request.url === "/about"){
        response.write("About page...");
        response.end();
    }

})


server.listen(3002, ()=>{
    console.log("Server arbeitet...");
});
