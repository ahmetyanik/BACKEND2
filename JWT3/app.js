var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require("jsonwebtoken");
const mongoose =  require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const corsOptions = {

  origin:"*",
  credentials:true,
  optionSuccessStatus:200
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const tokenSifresi = process.env.JWT_SECRET_KEY;
const URI = process.env.DATABASE_URI;

var app = express();

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



mongoose.connect(URI, () => {
  console.log("Database'e baglanildi...");
});


module.exports = app;
