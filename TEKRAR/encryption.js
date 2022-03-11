const  CryptoJS = require("crypto-js");

const PASSWORD_KEY = "123456.Aa";


const encrypt = (message) =>{

    console.log(message);
    return CryptoJS.Rabbit.encrypt(message,PASSWORD_KEY).toString();
}

const decrypt = (message) =>{

    console.log(message);
    return CryptoJS.Rabbit.decrypt(message,PASSWORD_KEY).toString(CryptoJS.enc.Utf8);
}


module.exports = {encrypt,decrypt};