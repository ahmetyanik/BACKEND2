import React from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards";

function Top4({top4}) {
  return(
    <div>
    <h1 className="text-center">Top4</h1> <Link to="/"><h1>Homepage</h1></Link>
  <div className="App d-flex justify-content-around align-items-center flex-wrap">
    {top4.map((record, index) => {
      console.log(record);

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
  </div>);
}

export default Top4;
