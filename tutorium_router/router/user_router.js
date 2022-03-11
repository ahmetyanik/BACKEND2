const express = require("express");
const router = express.Router()


router.get("/", (req,res)=>{

    res.send("Hier ist user page...");
})

router.get("/:name", (req,res)=>{

    res.send("Hier ist user "+ req.params.name +  " page...");
})


router.get("/:name/:id", (req,res)=>{

    res.send("Hier ist user "+ req.params.name + " " + req.params.id +  " page...");
})


router.post("/", (req,res)=>{

    res.send("Hier ist user post"+ req.params.name + " " + req.params.id +  " page...");
})

module.exports = router;

