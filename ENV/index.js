const test = process.env.TEST;
// z.b api_key
const API_KEY = process.env.API_KEY || "test_key";

if(test){
    console.log(test,typeof test);
    console.log("Test ist aktiviert");
}


// export TEST=true    console'a bunu yazdik
// bütün env degiskenleri string'tir




// Eger env degiskeni yoksa 1. Standartwert verilir "process.env.API_KEY || "test_key"
// Yoksa hata yakalanir

if(!API_KEY){
    throw new Error("API_KEY must be set")
}else{

    console.log("Fetching data from ...with Key=" + API_KEY);
}
