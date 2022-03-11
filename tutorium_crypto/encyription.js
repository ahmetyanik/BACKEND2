import CryptoJS from 'crypto-js';

const SECRET_KEY= "SecretPassword123";

/**
 * Convets Text to encrypted string
 * @param {String} message 
 * @returns {String}
 */


export const encrypt = (message) => {
    console.log(message);
    return CryptoJS.Rabbit.encrypt(message, SECRET_KEY).toString();
};

/**
 * Takes an encrypted String and converts it to readable Text
 * @param {String} message 
 * @returns {String}
 */
export const decrypt = (encryptedMessage) => {
    return CryptoJS.Rabbit.decrypt(encryptedMessage, SECRET_KEY).toString(CryptoJS.enc.Utf8);
};