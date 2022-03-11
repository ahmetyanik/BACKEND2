import React from "react";

function Cards({title, artist,year,image,price}) {
  return (
    <div>
      <div class="card" style={{width:"18rem"}}>
        <img src={image} class="card-img-top" alt={title}/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{artist} - {year} - {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
