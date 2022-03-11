const Urun = require("../Model/urunModel");


async function urunOlustur(req,res){

  const yeniUrun = req.body;

  try{
    await Urun.create(yeniUrun);
    
  }catch(err){

    console.log(err);
    res.send(err);
  }

  res.send("Yeni urun olusturuldu...")
  
}

module.exports = urunOlustur;

  