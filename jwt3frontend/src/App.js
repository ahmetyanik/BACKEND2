import { React, useState, useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Gizlisayfa from "./components/Gizlisayfa";

function App() {
  return (
    <BrowserRouter>
   
   <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/gizlisayfa"  element={<Gizlisayfa/>}/>
   </Routes>
    </BrowserRouter>
    );
    
}

export default App;
