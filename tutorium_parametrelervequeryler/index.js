const { request } = require("express");
const express = require("express");
const app = express();

app.use(express.json());



const users = [
  { id: 1, ad: "Ahmet", yas: 33 },
  { id: 2, ad: "Siddik", yas: 33 },
  { id: 3, ad: "Felix", yas: 33 },
  { id: 4, ad: "Muhanned", yas: 24 },
];

app.get("/", (req, res) => {
  res.send("Welcome to Main Page");
});

app.get("/users", (req, res) => {

   res.send(users);

/*   if(req.query.ters){
    res.send(users.reverse());
  } */

});


app.post("/users", (req,res)=>{

  console.log(req.body);

  const newUser = {
    id:users.length + 1,
    ad : req.body.ad,
    yas:req.body.yas
  }

  users.push(newUser);
  res.send(newUser);

});







app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  const findedUser = users.find((user) => user.id === parseInt(id));

  if (findedUser) {
    res.send(findedUser);
  }else{
    res.status(404).send(id + " idli kullanici bulunamadi!")
  }

});

app.get("*", (req, res) => {
  res.send("404 Fehler");
});

app.listen(3002, () => {
  console.log("Server 3002 portunu dinliyor...");
});
