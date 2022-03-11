import axios from "axios";
import React, { useEffect, useState } from "react";
import Product_Card from "./Product_Card";

const HomePage_Popular = () => {

  const [urunler,setUrunler] = useState([]);


  function urunleriAl(){

    axios.get("http://localhost:5000/api/populerurunler").then(function(gelenVeri){
      console.log(gelenVeri.data);
      setUrunler(gelenVeri.data);
    });

  }

  useEffect(urunleriAl,[]);


  return (
    <section className="section-content">
      <div className="container">
        <header className="section-heading">
          <h3 className="section-title">Populer Ürünler</h3>
        </header>

        <div className="row">

        {
          urunler.map((urun)=>{
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
    </section>
  );
};

export default HomePage_Popular;
