const express = require("express");
const users = require("../users");

const router = express.Router();

router.getuserbyid = (req,res)=>{

    const id = req.params.id;


    const bulunanKisi = users.filter(kisi=>{

        return kisi.id === parseInt(id);
    });

    res.json(bulunanKisi)

}

module.exports = router;