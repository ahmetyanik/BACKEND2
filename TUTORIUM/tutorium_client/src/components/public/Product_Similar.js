import axios from "axios";
import React, { useEffect, useState } from "react";
import Product_Card from "./Product_Card";

const Product_Similar = (props) => {

  const [urunler, setUrunler] =useState([]);


  function urunleriAl() {

    if(props.kategori_url){

      axios.get(`http://localhost:5000/api/urun/benzerurunler/${props.kategori_url}/${props.id}`).then(veri=>{
        setUrunler(veri.data);
      })
    }

  }

  useEffect(urunleriAl,[props.kategori_url !== undefined]);

  console.log(urunler);


  return (
    <React.StrictMode>
      <div className="container">
        <header className="section-heading">
          <h3>Benzer Ürünler </h3>
        </header>

        <div className="row">
        {
          urunler.map(urun=>{

            return(
              <Product_Card 
                key={urun._id}
                isim={urun.isim}
                yildizsayisi = {urun.yildizsayisi}
                puan={urun.yildiz.puan}
                ind_fiyat={urun.ind_fiyat}
                normal_fiyat={urun.normal_fiyat}
                resim={urun.resimler.bir}
                id={urun._id}
                />
            )

          })
        }
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Product_Similar;
