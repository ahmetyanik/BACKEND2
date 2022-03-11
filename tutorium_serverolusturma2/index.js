const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.write("Hier ist mainpage...");
        res.end();
    }

    if(req.url === "/about"){

        res.write("Hier ist about page...");
        res.end();
    }

})

server.listen(4000, ()=>{
    console.log("Server arbeitet...");
});