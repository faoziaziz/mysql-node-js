var aesjs = require('aes-js');
var teksman= "cieaerqwqw"
// An example 128 bit key

var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


// 128-bit, 192-bit and 256-bit keys
var key_128 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var key_192 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22, 23];
var key_256 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
               29, 30, 31];
 
// or, you may use Uint8Array:
var key_128_array = new Uint8Array(key_128);
var key_192_array = new Uint8Array(key_192);
var key_256_array = new Uint8Array(key_256);
 
// or, you may use Buffer in node.js:
var key_128_buffer = Buffer.from(key_128);
var key_192_buffer = Buffer.from(key_192);
var key_256_buffer = Buffer.from(key_256);


// An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
var key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
 
// Convert text to bytes

var text = 'tanjngerlqwkqlwkqlwkqlwkqlwkl';
var textBytes = aesjs.utils.utf8.toBytes(text);
var string = new TextDecoder("utf-8").decode(textBytes);
var decryptedText = aesjs.utils.utf8.fromBytes(textBytes);
console.log("isro1")
console.log(textBytes);
console.log(decryptedText);
