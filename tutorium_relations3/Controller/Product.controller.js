const Product = require("../Model/Product.Model");


async function addNewProduct(req, res) {

  const newProduct = req.body;

  console.log(newProduct);

  const result = await Product.create(newProduct);

  res.json(result);
}


async function getAllProducts(req,res){

    const allProducts = await Product.find().populate("hersteller","herstellerName erstelledIn");

    res.json(allProducts);
}


module.exports = {addNewProduct,getAllProducts};


