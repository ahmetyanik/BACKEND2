import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage";
import Secretpage from "./Components/Secretpage";

function App() {

  const [message,setMessage] = useState("");

  console.log("Message:",message);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage setMessage = {setMessage}/>} />
          <Route path="/secretpage" element={<Secretpage message = {message} />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
