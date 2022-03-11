const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{

    res.send("Hier ist user page!!!")
});
router.get("/:name",(req,res)=>{

    res.send("Hier ist user "+ req.params.name + " page!!!")
});
router.post("/",(req,res)=>{

    res.send("Hier ist user page mit post!!!")
});

module.exports = router;