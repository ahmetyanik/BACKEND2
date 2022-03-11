const mongoose = require("mongoose");
require("dotenv").config();

const Uretici = require("./ureticiModel");


const urunSchema = new mongoose.Schema({

    urunAdi : String,
    fiyat : Number,
    uretici : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Uretici"
    }

})

const Urun = mongoose.model("Urun", urunSchema);



module.exports = Urun;