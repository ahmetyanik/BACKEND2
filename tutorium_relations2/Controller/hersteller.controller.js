const Hersteller = require("../Model/Hersteller.Model");


async function addNewHersteller(req,res){

    const newHersteller = req.body;

    await Hersteller.create(newHersteller);

    res.json(newHersteller);

}


module.exports = addNewHersteller;