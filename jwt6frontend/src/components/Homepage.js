import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import DataStore from "../DataStore";


function Homepage() {

    const navigate = useNavigate();

    const {setGelenMesaj} = useContext(DataStore);


  async function loginYap() {
    const resp = await fetch("http://localhost:3000/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await resp.json();

    const token = data.token;

    localStorage.enyenitoken = token;

    console.log("ALINAN TOKEN:", token);
  }

  async function guncelle(){

    const resp = await fetch("http://localhost:3000/guncelle",{

    method:"PUT",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        "Authorization":`Bearer ${localStorage.enyenitoken}`
    }
    })

    const cevap = await resp.json();
    const message = await cevap.message;

   console.log(message);

   setGelenMesaj(message);

   navigate("/secretpage");

  }

  return (
    <div>
      <button onClick={loginYap}>Login Butonu</button>
      <button onClick={guncelle}>Güncelle Butonu</button>
    </div>
  );
}

export default Homepage;
