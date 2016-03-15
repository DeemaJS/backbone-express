var CryptoJS = require("crypto-js");
var request = require('request');

var data = [{id: 1}, {id: 2}]
 
// Encrypt 
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
console.log(ciphertext.toString());
 
// Decrypt 
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData);

// request
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
});