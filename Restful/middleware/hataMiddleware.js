
const hataYakalayici = (err,req,res,next)=>{


   res.json({
       hataKodu:err.statusCode,
       mesaj:err.message
   })




}

module.exports = hataYakalayici;