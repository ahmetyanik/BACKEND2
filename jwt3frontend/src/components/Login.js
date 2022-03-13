import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [mesaj, setMesaj] = useState("");
  const [token, setToken] = useState({});
  const navigate = useNavigate();

  function localStorageTokenControl(){

    if(localStorage.getItem("girisToken")){

      setToken(localStorage.getItem("girisToken"));
    }

  };

  useEffect(()=>{
    localStorageTokenControl();
  },[]);

  async function getData() {

  
      // Default options are marked with *
      const response = await fetch("http://localhost:3000/users/me", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "Authorization": "merhaba"
        },
      });
      return response.json({deneme:"deneme"}); // parses JSON response into native JavaScript objects
   


  }

  useEffect(() => {
    getData();
  }, [token]);

  async function loginControl(e) {
    e.preventDefault();

    const emailElement = document.querySelector("#exampleInputEmail1");
    const email = emailElement.value;
    const passwordElement = document.querySelector("#exampleInputPassword1");
    const password = passwordElement.value;

    const loginObject = { email: email, password: password};

    const result = await fetch("http://localhost:3000/users/giris", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
      body: JSON.stringify(loginObject),
    });

    console.log("stateToken:", token);

    const body = await result.json();

    localStorage.removeItem("girisToken");
    localStorage.setItem("girisToken", body.token);

    setToken(body.token);
    navigate("/gizlisayfa")
  }
  console.log("sonrakiToken:", token);

  return (
    <div className="App d-flex justify-content-center mt-5 align-items-center flex-column">
      <h1>LOGIN PAGE</h1>
      {mesaj === "giris basarili" ? (
        <h1>Hosgeldiniz</h1>
      ) : (
        <form onSubmit={loginControl} className="border p-3 shadow">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <Link to={`/register`}>
            <button type="button" class="btn btn-success mx-2">
              Register
            </button>
          </Link>
        </form>
      )}
    </div>
  );
}

export default Login;
