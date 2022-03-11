
const mongoose = require("mongoose");

const herstellerSchema = new mongoose.Schema({

    herstellerName : String,
    herstellerBranch: String,
    erstelledIn : {
        type: Date,
        default: Date.now
    }
});


const Hersteller = mongoose.model("hersteller", herstellerSchema);

module.exports = Hersteller;