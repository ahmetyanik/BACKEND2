const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("dotenv/config");
const mongoose = require("mongoose");
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addUserRouter = require("./routes/addUser.router.js");

const app = express();

const uri = process.env.DATABASE_URI;

const corsOptions = {

  origin:"*",
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/addUser",addUserRouter);





mongoose.connect(uri,(err)=>{

  console.log("Veritabanina baglanildi...");
})


app.listen(3000, ()=>{
  console.log("Server calisiyor...");
})

module.exports = app;
