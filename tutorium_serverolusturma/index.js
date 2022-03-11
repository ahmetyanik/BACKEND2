const http = require("http");

const server = http.createServer((req,res)=>{
    
    console.log("Geklicked");


    if(req.url === "/"){
        res.write("Hello World");
        res.end();

    }

    if(req.url === "/user"){

        res.write("Hier ist user page.");
        res.end();

    }


});

server.listen(3000)


