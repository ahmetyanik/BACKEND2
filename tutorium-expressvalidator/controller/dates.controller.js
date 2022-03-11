const {validationResult} = require("express-validator");

const addDate = (req,res) =>{

    const errors = validationResult(req);

    const isValid = errors.isEmpty();

    if(isValid){

        res.json({
            message: "Es gibt keine Fehler!"
        })

    }else{
        res.json({
            message:"Invalid Input",
            errors:errors.array()
        })
    }


}

module.exports = addDate;
