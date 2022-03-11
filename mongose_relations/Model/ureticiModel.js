const mongoose = require("mongoose");

const ureticiSchema = new mongoose.Schema({

    ureticiAdi : String,
    uretimBransi : String

})

const Uretici = mongoose.model("Uretici", ureticiSchema);

module.exports = Uretici;