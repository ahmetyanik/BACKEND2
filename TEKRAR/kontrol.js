
const control = (req,res,next)=>{

    const sifre = true;

    if(!sifre){

        res.send("Sifre hatali...")
    }else{
        next();
    }


}


module.exports = control;