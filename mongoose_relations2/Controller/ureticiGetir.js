const Uretici = require("../Model/ureticiModel");


async function ureticiGetir(req,res){

 const ureticiler =  await Uretici.find();

 res.send(ureticiler);

}

module.exports = ureticiGetir;