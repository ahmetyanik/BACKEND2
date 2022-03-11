const Product = require("../Model/Product.Model");


async function addNewProduct(req,res){

    const newProduct = req.body;

    await Product.create(newProduct);

    res.json(newProduct);

};

async function getProducts(req,res){

    const allProducts = await Product.find().populate("hersteller");

    res.json(allProducts);

}



module.exports = {addNewProduct,getProducts};