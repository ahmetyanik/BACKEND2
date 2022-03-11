const Urun = require("../Model/urunModel");


async function urunleriGetir(req,res){

 const urunler =  await Urun.find().populate("uretici");

 res.send(urunler);

}

module.exports = urunleriGetir;