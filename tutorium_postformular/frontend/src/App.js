import React, { useState } from "react";
import "./App.css";




function App() {


  const [formDatas,setFormDatas] = useState({email:"", password:""});

  function getDatasFromForm(e){
    e.preventDefault();

    console.log(e.target["type"]);

    const message = e.target["type"] === "email" ? 

   

    

   setFormDatas({email:e.target["email"], password:e.target["password"]})
 


  }





  return (
    <div  className="App d-flex justify-content-center">
      <form onClick={getDatasFromForm} style={{width:"50%"}}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
