const mongoose = require("mongoose");
const Urun = require("../Model/urunModel");
require("dotenv").config();

const MONGO="mongodb+srv://ahmet:1234@cluster0.y90jd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoadresse = MONGO ?? 'mongodb://localhost:27107/demo';

mongoose.connect(mongoadresse);

const db = mongoose.connection;
db.on("error", (error) => console.log("Mongoose-Error:", error));

db.once("open", async () => {
  console.log("Mit DB verbunden");
  // Dein Code

  const tumUrunler = await Urun.findOne().populate("uretici");

  console.log(tumUrunler);

  db.close();
});
