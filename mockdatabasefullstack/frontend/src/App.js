import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Top4 from "./components/Top4";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [records, setRecords] = useState([]);
  const [top4,setTop4] = useState([]);
  const [newRecord, setNewRecord] = useState();


  async function getRecords() {
    const response = await fetch(BASE_URL+"/records");

    const data = await response.json();

    setRecords(data);
  }

  async function getRecordsTop4() {
    const response = await fetch(BASE_URL + "/records/top4");

    const data = await response.json();

    setTop4(data);
  }

  useEffect(() => {
    getRecords();
  }, [newRecord]);

  useEffect(() => {
    getRecordsTop4();
  }, [newRecord]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage records={records} newRecord={newRecord} setNewRecord={setNewRecord} />} />
        <Route path="/top4" element={<Top4 top4={top4} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
