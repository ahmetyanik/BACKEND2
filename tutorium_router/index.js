const express = require("express");
const userRouter = require("./router/user_router");
const mainRouter = require("./router/main_router");
const productRouter = require("./router/product_router");

const app = express();


app.use("/",mainRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)

app.use((req,res)=>{
    res.status(404).send("Unhandled Link!!!")
})



app.listen(3000, ()=>{
    console.log("Server arbeitet...");
})

