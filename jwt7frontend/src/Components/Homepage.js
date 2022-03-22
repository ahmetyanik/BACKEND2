import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage({setMessage}) {
  const navigate = useNavigate();

  async function goSecretPage() {

    const response = await fetch("http://localhost:4000/updateSecretData",{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            "Authorization":`Bearer ${localStorage.newToken}`
        }

    })

    const secretMessageData = await response.json();

    const secretMessage = secretMessageData.message;

    console.log(secretMessage);

    setMessage(secretMessage)

    navigate("/secretpage");
  }

  async function loginOrRegister() {
    const response = await fetch("http://localhost:4000/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    });

    const tokenFromServer = await response.json();
    console.log("FRONTEND TOKEN:", tokenFromServer);

    localStorage.newToken = tokenFromServer;
  }

  return (
    <div>
      <button onClick={loginOrRegister}>LOGIN/REGISTER</button>
      <button onClick={goSecretPage}>SECRET PAGE</button>
    </div>
  );
}

export default Homepage;
