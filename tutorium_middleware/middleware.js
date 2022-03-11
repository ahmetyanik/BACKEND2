const accessControl =(req,res,next) =>{

    const password = true;

    if(password === true){

        next();
    }else{
        res.send("You are not authorised!!!")
    }

}


const zweiteAccessControl =(req,res,next) =>{

    const password = true;

    if(password === true){

        next();
    }else{
        res.send("You are not authorised. ZWEITE CONTROL !!!")
    }

}

export { accessControl,zweiteAccessControl};