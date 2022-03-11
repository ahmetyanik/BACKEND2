const express = require("express");
const router = express.Router()


router.get("/", (req,res)=>{

    res.send("Hier ist product page...");
})

router.get("/:name", (req,res)=>{

    res.send("Hier ist product "+ req.params.name +  " page...");
})


router.get("/:name/:id", (req,res)=>{

    res.send("Hier ist product "+ req.params.name + " " + req.params.id +  " page...");
})

module.exports = router;