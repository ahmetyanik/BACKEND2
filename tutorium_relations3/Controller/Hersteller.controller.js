const Hersteller = require("../Model/Hersteller.Model");

async function addNewHersteller(req, res) {

  const newHersteller = req.body;

  console.log(newHersteller);

  const result = await Hersteller.create(newHersteller);

  res.json(result);
}


module.exports = addNewHersteller;


