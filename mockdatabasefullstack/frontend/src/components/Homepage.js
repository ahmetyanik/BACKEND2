import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Homepage({ records, setNewRecord }) {
  const [addingRecord, setAddingRecord] = useState({
    title: "",
    artist: "",
    year: "",
    image: "",
    price: "",
  });

  function inputChange(e) {
    let dataVonInput = e.target.value;

    setAddingRecord({ ...addingRecord, [e.target.name]: dataVonInput });
  }

  function postNewRecord() {
    fetch(BASE_URL + "/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addingRecord),
    });
    setNewRecord(addingRecord);
  }

  return (
    <div>
      <h1 className="text-center">Homepage</h1>{" "}
      <Link to="/top4">
        <h1>Top4</h1>
      </Link>
      <div className="App d-flex justify-content-around align-items-center flex-wrap">
        {records.map((record, index) => {
          return (
            <Cards
              key={index}
              title={record.title}
              artist={record.artist}
              year={record.year}
              image={record.image}
              price={record.price}
            />
          );
        })}
      </div>
      <div className="text-center fs-3 pt-5">ADD NEW RECORD</div>
      <div className="d-flex justify-content-center ">
        <div className="bg-dark text-light p-5">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Title
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              onChange={inputChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Artist
            </label>
            <input
              type="text"
              class="form-control"
              name="artist"
              onChange={inputChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Year
            </label>
            <input
              type="text"
              class="form-control"
              name="year"
              onChange={inputChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Image Link
            </label>
            <input
              type="text"
              class="form-control"
              name="image"
              onChange={inputChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              name="price"
              onChange={inputChange}
            />
          </div>

          <button onClick={postNewRecord} class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
