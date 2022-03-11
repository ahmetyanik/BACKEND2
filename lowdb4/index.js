import express from 'express';
import { Low, JSONFile } from 'lowdb';

const db = new Low(new JSONFile('veritabani.json'));
await db.read();

db.data ||= { veritabani: [] };

const veritabani = db.data.veritabani;

const app = express();
app.use(express.json());


app.get("/:name/:age",(req,res)=>{

    const name = req.params.name;
    const age = req.params.age;

    veritabani.push({isim: name, yas:age});
    db.write();
    res.send("Veri eklendi...")
})

app.post("/urun",(req,res)=>{

    const ad = req.body.ad;
    const fiyat = req.body.fiyat;

    veritabani.push({urunAdi:ad, urunFiyati:fiyat});
    db.write();
    res.send({urunAdi:ad, urunFiyati:fiyat});

})


app.listen("3002", ()=>{
    console.log("Server calisiyor...");
})