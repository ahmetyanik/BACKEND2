const http = require("http");

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        
            res.write("Anasayfa");
            res.end();


    }
    if(req.url === "/deneme"){
        
            res.write("Deneme Sayfasi");
            res.end();


    }

})


server.listen(3000,()=>{
    console.log("Server calisiyor...");
})