const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Main Page");
});

app.get("/users", (req, res) => {
  res.send("Hier ist users page...");

/*   res.send([
    {
      name: "ahmet",
      age: 33,
    },
  ]); */

  
});

app.get("*", (req, res) => {
  res.send("404 Fehler");
});

app.listen(3001, () => {
  console.log("Server 3001 portunu dinliyor...");
});
