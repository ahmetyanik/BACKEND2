import express from "express";

const app = express();

app.get("/user/:name/:age",(req,res)=>{

    const name = req.params.name;
    const age = req.params.age;


    console.log(req.query);

    const isShow = req.query.isShow;


    if(isShow === "true"){

        res.send("Hello " + name + " you are " + age + " years old." )
    }else{

        res.send("You can not see this info!!!")
    }

    


})


app.listen(3006, ()=>{
    console.log("Server arbeitet...");
})