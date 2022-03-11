const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost/restful_api",()=>{
    console.log("Veritabanina baglanildi");
})


