const express = require("express");
const {validationResult} = require("express-validator");


const  addUser = async (req,res)=>{

    const errors = validationResult(req);

    const isValid = errors.isEmpty();

    if(isValid){

        res.json({
            message:"success"
        })
    }else{
        res.json({
            message:"Invalid Input",
            errors:errors.array()
        })
    }

} 

module.exports = addUser;