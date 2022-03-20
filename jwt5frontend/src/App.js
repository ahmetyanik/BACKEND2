import { React, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {

  

  const navigate = useNavigate();

  async function tokenGonder(e) {
      const resp = await fetch("http://localhost:3000/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        }),
      });

      const data = await resp.json();
      // Token aus response header holen
      const token = data.token;
      // Token speichern
      localStorage.token = token;
    
  }


  async function guncelle(){

    const resp = await fetch('http://localhost:3000/guncelle', {
       method: "PUT",
       headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
					"Authorization": `Bearer ${localStorage.token}`
       },
       body: JSON.stringify({
       }),
    })

    const cevap = await resp.json(); 
    const message = cevap.message;

    if(message==="Here is secret page!"){

      navigate("/secretpage")
    }
      

  }

  return (
    <div className="App">
      <button onClick={tokenGonder}>TOKEN GÖNDER</button>
      <div></div>
      <button onClick={guncelle}>SECRET PAGE</button>
    </div>
  );
}

export default App;
