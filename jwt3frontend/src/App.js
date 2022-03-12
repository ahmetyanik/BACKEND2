import { React, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mesaj, setMesaj] = useState("");
  const [post,setPost] = useState("")

  function getData() {
    fetch("http://localhost:3000/users/me")
      .then((data) => data.json())
      .then((data) => setMesaj(data.mesaj));
  }

  useEffect(() => {
    getData();
  }, [post]);

  async function loginControl(e) {
    e.preventDefault();

    const emailElement = document.querySelector("#exampleInputEmail1");
    const email = emailElement.value;
    const passwordElement = document.querySelector("#exampleInputPassword1");
    const password = passwordElement.value;

    const loginObject = { email: email, password: password };

    await fetch("http://localhost:3000/users/giris", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObject),
    });

    setPost("Bir obje denemek icin gönderildi!")
  }

  return (
    <div className="App d-flex justify-content-center mt-5">
      {mesaj === "giris basarili" ? (
        <h1>Hosgeldiniz</h1>
      ) : (
        <form onSubmit={loginControl} className="border p-3 shadow">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              required
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
              required
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
        </form>
      )}
    </div>
  );
}

export default App;
