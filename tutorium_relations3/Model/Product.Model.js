
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName : String,
    productPrice: Number,
    hersteller :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "hersteller"
    }

});


const Product = mongoose.model("product",productSchema);


module.exports = Product;