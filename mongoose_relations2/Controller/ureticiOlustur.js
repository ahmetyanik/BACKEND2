const Uretici = require("../Model/ureticiModel");


async function ureticiOlustur(req,res){

  const yeniUretici = req.body;

  try{
    await Uretici.create(yeniUretici);
    
  }catch(err){

    console.log(err);
    res.send(err);
  }

  res.send("Yeni üretici olusturuldu...")
  
}



module.exports = ureticiOlustur;

  