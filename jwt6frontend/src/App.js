import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Secretpage from "./components/Secretpage";
import Homepage from "./components/Homepage";
import DataStore from "./DataStore";

function App() {
  const [gelenMesaj, setGelenMesaj] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <DataStore.Provider value={{gelenMesaj,setGelenMesaj}}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/secretpage" element={<Secretpage />} />
          </Routes>
        </DataStore.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
