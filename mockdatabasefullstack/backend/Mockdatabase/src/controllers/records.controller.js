import db from "../database.js";

console.log(db);

const database = db.data.database;
let databaseId = parseInt(db.data.databaseId);
export const getRecords = (req, res) => {
  res.json(database);
};

export const controlNewRecord = (req, res, next) => {
  const body = req.body;

  const title = body.title;
  const artist = body.artist;
  const year = body.year;
  const image = body.image;
  const price = body.price;
  const id = databaseId;

  if (title !== "") {
    res.send("Merhaba");
    console.log("Merhaba");
  }else{
    res.send("Ikinci")
    console.log("Ikinci");
  }
};

export const addRecord = (req, res) => {  

  const body = req.body;

  const title = body.title;
  const artist = body.artist;
  const year = body.year;
  const image = body.image;
  const price = body.price;

  const newRecord = {
    title: title,
    artist: artist,
    year: year,
    image: image,
    price: price,
    id: databaseId,
  };

  database.unshift(newRecord);
  db.data.databaseId++;
  db.write();
  console.log(databaseId);
  res.send(newRecord);
};

export const showFour = (req, res) => {
  const filteredElements = database.filter((element, index) => {
    return index < 4;
  });

  res.send(filteredElements);
};


export const showById = (req,res)=>{

  const id = parseInt(req.params.id);

  const filteredElement = database.filter((element)=>{

      return id === element.id;

  })

  res.send(filteredElement);

}
