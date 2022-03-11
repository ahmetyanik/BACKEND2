const express = require("express");
const router = express.Router();


router.get("/", (req,res)=>{
    res.send("Hier ist main page!!!")
})

module.exports = router;