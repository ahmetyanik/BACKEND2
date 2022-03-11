const express = require("express");
const userRouter = require("./router/user_router");
const mainRouter = require("./router/main_router");
const fehlerRouter = require("./router/fehler_router");

const app = express();


app.use("/",mainRouter);
app.use("/user",userRouter);
app.use(fehlerRouter);




app.listen(3001,()=>{
    console.log("Server arbeitet...");
})