
import express from "express";

const app = express();

app.get("/:name/:age", (req,res)=>{

    console.log(req.params);
    console.log(req.query);

    const name = req.params.name;
    const age = req.params.age;

    const showDatas = req.query.showDatas;

    if(showDatas === "true"){

        res.send("Ich bin " + name + " und " + age + " jahre alt.")
    }else{
        res.send("Es ist nicht erlaubt.")
    }

})



app.listen(3000, ()=>{
    console.log("Server arbeitet...");
})